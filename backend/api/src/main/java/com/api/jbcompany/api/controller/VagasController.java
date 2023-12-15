package com.api.jbcompany.api.controller;

import com.api.jbcompany.api.model.Vagas;
import com.api.jbcompany.api.service.VagasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vagas")
public class VagasController {

    @Autowired
    private VagasService vagasService;

    @GetMapping
    public ResponseEntity<List<Vagas>> listarVagas() {
        List<Vagas> vagas = vagasService.listarVagas();
        return ResponseEntity.ok(vagas);
    }

    @PostMapping
    public ResponseEntity<Vagas> cadastrarVagas(@RequestBody Vagas vaga) {
        Vagas novaVaga = vagasService.cadastrarVagas(vaga);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaVaga);
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
