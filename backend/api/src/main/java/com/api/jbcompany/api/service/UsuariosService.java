package com.api.jbcompany.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.api.jbcompany.api.model.Usuarios;
import com.api.jbcompany.api.model.UsuariosRole;
import com.api.jbcompany.api.repository.UsuariosRepository;

@Service
public class UsuariosService {

    @Autowired
    private AuthorizationService authorizationService;

    @Autowired
    private UsuariosRepository usuariosRepository;

    public Usuarios encontrarUsuarioPorEmail(String email) {
        return usuariosRepository.findByEmail(email);
    }

}
