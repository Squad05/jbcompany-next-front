package com.api.jbcompany.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.jbcompany.api.dto.LoginResponseDTO;
import com.api.jbcompany.api.dto.RegistroUsuarioDTO;
import com.api.jbcompany.api.dto.UsuarioDTO;
import com.api.jbcompany.api.model.Usuarios;
import com.api.jbcompany.api.repository.UsuariosRepository;
import com.api.jbcompany.api.service.TokenService;

@RestController
@RequestMapping("auth")
public class UsuarioController {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsuariosRepository usuariosRepository;

    @PostMapping("/logar")
    public ResponseEntity<?> logar(@RequestBody UsuarioDTO data) {
        var usuario = new UsernamePasswordAuthenticationToken(data.email(),
                data.senha());
        try {
            var auth = this.authenticationManager.authenticate(usuario);
            var token = tokenService.gerarToken((Usuarios) auth.getPrincipal());
            return ResponseEntity.ok(new LoginResponseDTO(token));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falha na autenticação: " + e.getMessage());
        }

    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuarios> cadastrarUsuario(@RequestBody RegistroUsuarioDTO data) {
        if (this.usuariosRepository.findByEmail(data.email()) != null) {
            return ResponseEntity.badRequest().build();
        }
        String senhaCriptografada = new BCryptPasswordEncoder().encode(data.senha());
        Usuarios novoUsuario = new Usuarios(data.nome(), data.email(), senhaCriptografada, data.cargo());
        this.usuariosRepository.save(novoUsuario);
        return ResponseEntity.ok().body("Cadastro Realizado com sucesso");
    }

}
