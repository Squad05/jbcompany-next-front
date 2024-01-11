package com.api.jbcompany.api.controller;

import com.api.jbcompany.api.model.Candidaturas;
import com.api.jbcompany.api.model.Usuarios;
import com.api.jbcompany.api.service.CandidaturasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidaturas")
public class CandidaturasController {

    @Autowired
    private CandidaturasService candidaturasService;

    @GetMapping
    public ResponseEntity<List<Candidaturas>> listarCandidaturas() {
        List<Candidaturas> candidaturas = candidaturasService.listarCandidaturas();
        return ResponseEntity.ok(candidaturas);
    }

    @PostMapping
    public ResponseEntity<?> cadastrarCandidatura(@RequestBody Candidaturas candidatura) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        Candidaturas novaCandidatura = candidaturasService.cadastrarCandidatura(candidatura);
        return ResponseEntity.status(HttpStatus.CREATED).body(auth);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Candidaturas> pegarCandidaturaPorId(@PathVariable Long id) {
        try {
            Candidaturas candidatura = candidaturasService.pegarCandidaturaPorId(id);
            return ResponseEntity.ok(candidatura);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Candidaturas> atualizarCandidatura(@PathVariable Long id,
            @RequestBody Candidaturas candidatura) {
        try {
            Candidaturas candidaturaAtualizada = candidaturasService.atualizarCandidatura(id, candidatura);
            return ResponseEntity.ok(candidaturaAtualizada);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarCandidatura(@PathVariable Long id) {
        try {
            candidaturasService.deletarCandidatura(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
