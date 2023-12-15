package com.api.jbcompany.api.controller;

import java.util.List;

import com.api.jbcompany.api.model.Empresas;
import com.api.jbcompany.api.service.EmpresasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/empresas")
public class EmpresasController {

    @Autowired
    private EmpresasService empresasService;

    @GetMapping
    public ResponseEntity<List<Empresas>> listarEmpresas() {
        List<Empresas> empresas = empresasService.listarEmpresas();
        return ResponseEntity.ok(empresas);
    }

    @PostMapping
    public ResponseEntity<Empresas> cadastrarEmpresas(@RequestBody Empresas empresa) {
        Empresas novaEmpresa = empresasService.cadastrarEmpresas(empresa);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaEmpresa);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empresas> pegarEmpresasPorId(@PathVariable Long id) {
        try {
            Empresas empresa = empresasService.pegarEmpresasPorId(id);
            return ResponseEntity.ok(empresa);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empresas> atualizarEmpresas(@PathVariable Long id, @RequestBody Empresas empresa) {
        try {
            Empresas empresaAtualizada = empresasService.atualizarEmpresas(id, empresa);
            return ResponseEntity.ok(empresaAtualizada);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarEmpresas(@PathVariable Long id) {
        try {
            empresasService.deletarEmpresas(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
