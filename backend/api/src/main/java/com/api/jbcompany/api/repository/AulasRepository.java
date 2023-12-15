package com.api.jbcompany.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.jbcompany.api.model.Aulas;

@Repository
public interface AulasRepository extends JpaRepository<Aulas, Long> {

    List<Aulas> findAllByCursoId(Long cursoId);

}