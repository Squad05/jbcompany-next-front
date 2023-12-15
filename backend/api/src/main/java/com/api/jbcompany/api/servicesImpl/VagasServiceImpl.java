package com.api.jbcompany.api.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.jbcompany.api.model.Vagas;
import com.api.jbcompany.api.repository.VagasRepository;
import com.api.jbcompany.api.service.VagasService;

@Service
public class VagasServiceImpl implements VagasService {

    @Autowired
    private VagasRepository vagasRepository;

    @Override
    public List<Vagas> listarVagas() {
        return vagasRepository.findAll();
    }

    @Override
    @Transactional
    public Vagas cadastrarVagas(Vagas vagas) {
        return vagasRepository.save(vagas);
    }

    @Override
    @Transactional
    public Vagas atualizarVagas(Long id, Vagas vagasAtualizado) {
        Optional<Vagas> optionalVaga = vagasRepository.findById(id);
        if (optionalVaga.isPresent()) {
            Vagas vagaExistente = optionalVaga.get();
            vagaExistente.setEmpresas(vagasAtualizado.getEmpresas());
            vagaExistente.setDescricao(vagasAtualizado.getDescricao());
            vagaExistente.setCep(vagasAtualizado.getCep());
            vagaExistente.setLocalizacao(vagasAtualizado.getLocalizacao());
            vagaExistente.setFuncao(vagasAtualizado.getFuncao());
            vagaExistente.setStatus_vaga(vagasAtualizado.isStatus_vaga());
            vagaExistente.setSalario(vagasAtualizado.getSalario());

            return vagasRepository.save(vagaExistente);
        } else {
            throw new RuntimeException("Vaga com ID " + id + " não encontrada para atualização.");
        }
    }

    @Override
    @Transactional
    public void deletarVagas(Long id) {
        vagasRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Vagas pegarVagasPorId(Long id) {
        return vagasRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vaga com ID " + id + " não encontrada."));
    }
}
