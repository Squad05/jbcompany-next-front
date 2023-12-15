package com.api.jbcompany.api.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Candidaturas cadastrarCandidatura(Candidaturas candidatura) {
        return candidaturasRepository.save(candidatura);
    }

    @Override
    public Candidaturas atualizarCandidatura(Long id, Candidaturas candidaturaAtualizada) {
        Optional<Candidaturas> optionalCandidatura = candidaturasRepository.findById(id);

        if (optionalCandidatura.isPresent()) {
            Candidaturas candidatura = optionalCandidatura.get();
            candidatura.setUsuarios(candidaturaAtualizada.getUsuarios());
            candidatura.setVagas(candidaturaAtualizada.getVagas());

            return candidaturasRepository.save(candidatura);
        } else {
            throw new RuntimeException("Candidatura com ID " + id + " não encontrado para atualização.");
        }
    }

    @Override
    public void deletarCandidatura(Long id) {
        candidaturasRepository.deleteById(id);
    }

    @Override
    public Candidaturas pegarCandidaturaPorId(Long id) {
        return candidaturasRepository.findById(id).orElse(null);
    }
}
