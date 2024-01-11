package com.api.jbcompany.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Vagas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "empresa_id")
    private Usuarios empresas;

    private String descricao;
    private String cep;
    private String localizacao;
    private String funcao;
    private boolean status_vaga;
    private int salario;

    public Vagas(Long id, Usuarios empresas, String descricao, String cep, String localizacao, String funcao,
            boolean status_vaga, int salario) {
        this.id = id;
        this.empresas = empresas;
        this.descricao = descricao;
        this.cep = cep;
        this.localizacao = localizacao;
        this.funcao = funcao;
        this.status_vaga = status_vaga;
        this.salario = salario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuarios getEmpresas() {
        return empresas;
    }

    public void setEmpresas(Usuarios empresas) {
        this.empresas = empresas;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }

    public boolean isStatus_vaga() {
        return status_vaga;
    }

    public void setStatus_vaga(boolean status_vaga) {
        this.status_vaga = status_vaga;
    }

    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }

    public Vagas() {

    }

}