package com.api.jbcompany.api.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.jbcompany.api.model.Candidaturas;
import com.api.jbcompany.api.repository.CandidaturasRepository;
import com.api.jbcompany.api.service.CandidaturasService;

@Service
public class CandidaturasServiceImpl implements CandidaturasService {

    @Autowired
    private CandidaturasRepository candidaturasRepository;

    @Override
    public List<Candidaturas> listarCandidaturas() {
        return candidaturasRepository.findAll();
    }

    @Override
    @Transactional
    public Candidaturas cadastrarCandidaturas(Candidaturas candidatura) {
        return candidaturasRepository.save(candidatura);
    }

    @Override
    @Transactional
    public Candidaturas atualizarCandidaturas(Long id, Candidaturas candidaturaAtualizada) {
        Optional<Candidaturas> optionalCandidatura = candidaturasRepository.findById(id);
        if (optionalCandidatura.isPresent()) {
            Candidaturas candidaturaExistente = optionalCandidatura.get();
            candidaturaExistente.setUsuarios(candidaturaAtualizada.getUsuarios());
            candidaturaExistente.setVagas(candidaturaAtualizada.getVagas());

            return candidaturasRepository.save(candidaturaExistente);
        } else {
            throw new RuntimeException("Candidatura com ID " + id + " não encontrada para atualização.");
        }
    }

    @Override
    @Transactional
    public void deletarCandidaturas(Long id) {
        candidaturasRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Candidaturas pegarCandidaturasPorId(Long id) {
        return candidaturasRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Candidatura com ID " + id + " não encontrada."));
    }
}
