package com.api.jbcompany.api.model;

public enum UsuariosRole {
    ADMIN("admin"),
    USER("user");

    private final String cargo;

    UsuariosRole(String cargo) {
        this.cargo = cargo;
    }

    public String getCargo() {
        return cargo;
    }
}
