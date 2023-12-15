package com.api.jbcompany.api.service;

import java.util.List;

import com.api.jbcompany.api.model.Usuarios;

public interface UsuariosService {
    List<Usuarios> listarUsuarios();

    Usuarios pegarUsuarioPorId(Long id);

    Usuarios atualizarUsuario(Long id, Usuarios usuarioAtualizado);

    void deletarUsuario(Long id);
}
