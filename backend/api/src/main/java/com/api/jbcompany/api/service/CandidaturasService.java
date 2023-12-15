package com.api.jbcompany.api.service;

import java.util.List;

import com.api.jbcompany.api.model.Candidaturas;

public interface CandidaturasService {
    List<Candidaturas> listarCandidaturas();

    Candidaturas cadastrarCandidatura(Candidaturas Candidatura);

    Candidaturas atualizarCandidatura(Long id, Candidaturas CandidaturaAtualizado);

    void deletarCandidatura(Long id);

    Candidaturas pegarCandidaturaPorId(Long id);

}
