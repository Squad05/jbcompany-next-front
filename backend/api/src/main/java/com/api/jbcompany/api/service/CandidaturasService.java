package com.api.jbcompany.api.service;

import java.util.List;

import com.api.jbcompany.api.model.Candidaturas;

public interface CandidaturasService {
    List<Candidaturas> listarCandidaturas();

    Candidaturas cadastrarCandidaturas(Candidaturas candidaturas);

    Candidaturas atualizarCandidaturas(Long id, Candidaturas candidaturasAtualizado);

    void deletarCandidaturas(Long id);

    Candidaturas pegarCandidaturasPorId(Long id);

}
