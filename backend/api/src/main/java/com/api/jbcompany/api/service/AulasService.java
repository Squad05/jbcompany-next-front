package com.api.jbcompany.api.service;

import java.util.List;

import com.api.jbcompany.api.model.Aulas;

public interface AulasService {
    List<Aulas> listarAulas();

    Aulas cadastrarAula(Aulas aula);

    Aulas atualizarAula(Long id, Aulas aulaAtualizado);

    void deletarAula(Long id);

    Aulas pegarAulaPorId(Long id);
}
