package com.api.jbcompany.api.service;

import java.util.List;

import com.api.jbcompany.api.model.Cursos;

public interface CursosService {
    List<Cursos> listarCursos();

    Cursos cadastrarCurso(Cursos curso);

    Cursos atualizarCurso(Long id, Cursos cursoAtualizado);

    void deletarCurso(Long id);

    Cursos pegarCursoPorId(Long id);

}
