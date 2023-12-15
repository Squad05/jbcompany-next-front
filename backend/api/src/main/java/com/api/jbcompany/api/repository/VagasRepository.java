package com.api.jbcompany.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.api.jbcompany.api.model.Vagas;

public interface VagasRepository extends JpaRepository<Vagas, Long> {

}
