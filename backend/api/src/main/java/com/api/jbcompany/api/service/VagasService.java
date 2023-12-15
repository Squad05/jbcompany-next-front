package com.api.jbcompany.api.service;

import java.util.List;

import com.api.jbcompany.api.model.Vagas;

public interface VagasService {
    List<Vagas> listarVagas();

    Vagas cadastrarVagas(Vagas vagas);

    Vagas atualizarVagas(Long id, Vagas vagasAtualizado);

    void deletarVagas(Long id);

    Vagas pegarVagasPorId(Long id);

}
