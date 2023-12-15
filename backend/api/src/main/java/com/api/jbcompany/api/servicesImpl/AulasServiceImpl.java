package com.api.jbcompany.api.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.jbcompany.api.model.Aulas;
import com.api.jbcompany.api.repository.AulasRepository;
import com.api.jbcompany.api.service.AulasService;

@Service
public class AulasServiceImpl implements AulasService {

    @Autowired
    private AulasRepository aulasRepository;

    @Override
    public List<Aulas> listarAulasPorCursoId(Long cursoId) {
        return aulasRepository.findAllByCursoId(cursoId);
    }

    @Override
    public Aulas cadastrarAula(Aulas aulas) {
        return aulasRepository.save(aulas);
    }

    @Override
    public Aulas atualizarAula(Long id, Aulas aulaAtualizada) {
        Optional<Aulas> optionalAula = aulasRepository.findById(id);
        if (optionalAula.isPresent()) {
            Aulas aulaExistente = optionalAula.get();
            aulaExistente.setCurso(aulaAtualizada.getCurso());
            aulaExistente.setDescricao(aulaAtualizada.getDescricao());
            aulaExistente.setLink(aulaAtualizada.getLink());
            aulaExistente.setTitulo(aulaAtualizada.getTitulo());

            return aulasRepository.save(aulaExistente);
        } else {
            throw new RuntimeException("Aula com ID " + id + " não encontrada para atualização");
        }
    }

    @Override
    public void deletarAula(Long id) {
        aulasRepository.findById(id).ifPresentOrElse(
                aula -> aulasRepository.deleteById(id),
                () -> {
                    throw new RuntimeException("Aula com ID " + id + " não encontrada para exclusão");
                });
    }

    @Override
    public Aulas pegarAulaPorId(Long id) {
        return aulasRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Aula com ID " + id + " não encontrada"));
    }

    @Override
    public List<Aulas> listarAulas() {
        return aulasRepository.findAll();
    }
}
