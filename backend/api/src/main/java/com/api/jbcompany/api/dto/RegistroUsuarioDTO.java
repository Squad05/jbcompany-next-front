package com.api.jbcompany.api.dto;

import com.api.jbcompany.api.model.UsuariosRole;

public record RegistroUsuarioDTO(String nome, String email, String senha, UsuariosRole cargo) {

}
