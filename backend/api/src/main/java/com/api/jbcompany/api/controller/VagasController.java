package com.api.jbcompany.api.controller;

import com.api.jbcompany.api.model.Usuarios;
import com.api.jbcompany.api.model.Vagas;
import com.api.jbcompany.api.repository.UsuariosRepository;
import com.api.jbcompany.api.service.AuthorizationService;
import com.api.jbcompany.api.service.UsuariosService;
import com.api.jbcompany.api.service.VagasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vagas")
public class VagasController {

    @Autowired
    private UsuariosService usuariosService;

    @Autowired
    private AuthorizationService authorizationService;

    @Autowired
    private VagasService vagasService;

    @GetMapping
    public ResponseEntity<List<Vagas>> listarVagas() {
        List<Vagas> vagas = vagasService.listarVagas();
        return ResponseEntity.ok(vagas);
    }

    @PostMapping
    public ResponseEntity<?> cadastrarVagas(@RequestBody Vagas vaga) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        Usuarios usuario = usuariosService.encontrarUsuarioPorEmail(auth.getName());

        if (usuario != null) {
            vaga.setEmpresas(usuario);
            Vagas novaVaga = vagasService.cadastrarVagas(vaga);
            return ResponseEntity.status(HttpStatus.CREATED).body(novaVaga);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vagas> pegarVagasPorId(@PathVariable Long id) {
        try {
            Vagas vaga = vagasService.pegarVagasPorId(id);
            return ResponseEntity.ok(vaga);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vagas> atualizarVagas(@PathVariable Long id, @RequestBody Vagas vaga) {
        try {
            Vagas vagaAtualizada = vagasService.atualizarVagas(id, vaga);
            return ResponseEntity.ok(vagaAtualizada);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarVagas(@PathVariable Long id) {
        try {
            vagasService.deletarVagas(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
