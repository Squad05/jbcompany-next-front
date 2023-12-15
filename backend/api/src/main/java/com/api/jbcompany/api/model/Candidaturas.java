package com.api.jbcompany.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Id;

@Entity
public class Candidaturas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuarios usuarios;

    @ManyToOne
    @JoinColumn(name = "vaga_id")
    private Vagas vagas;

    public Candidaturas() {

    }

    public Candidaturas(Long id, Usuarios usuarios, Vagas vagas) {
        this.id = id;
        this.usuarios = usuarios;
        this.vagas = vagas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }

    public Vagas getVagas() {
        return vagas;
    }

    public void setVagas(Vagas vagas) {
        this.vagas = vagas;
    }
}
