package com.api.jbcompany.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.api.jbcompany.api.model.Usuarios;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {

    Usuarios findByEmail(String email);

    // Usuarios findByUserDetails(UserDetails userDetails);

}
