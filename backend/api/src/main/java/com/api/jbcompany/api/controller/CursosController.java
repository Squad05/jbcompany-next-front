package com.api.jbcompany.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.jbcompany.api.model.Cursos;
import com.api.jbcompany.api.service.CursosService;

@RestController
@RequestMapping("/cursos")
public class CursosController {

    @Autowired
    private CursosService cursosService;

    @GetMapping
    public ResponseEntity<List<Cursos>> listarCursos() {
        List<Cursos> cursos = cursosService.listarCursos();
        return ResponseEntity.ok(cursos);
    }

    @PostMapping
    public ResponseEntity<Cursos> cadastrarCurso(@RequestBody Cursos curso) {
        Cursos novoCurso = cursosService.cadastrarCurso(curso);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCurso);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cursos> pegarCursoPorId(@PathVariable Long id) {
        try {
            Cursos curso = cursosService.pegarCursoPorId(id);
            return ResponseEntity.ok(curso);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cursos> atualizarCurso(@PathVariable Long id, @RequestBody Cursos curso) {
        try {
            Cursos cursoAtualizado = cursosService.atualizarCurso(id, curso);
            return ResponseEntity.ok(cursoAtualizado);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarCurso(@PathVariable Long id) {
        try {
            cursosService.deletarCurso(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
