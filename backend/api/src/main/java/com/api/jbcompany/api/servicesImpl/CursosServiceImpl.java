package com.api.jbcompany.api.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.jbcompany.api.model.Cursos;
import com.api.jbcompany.api.repository.CursosRepository;
import com.api.jbcompany.api.service.CursosService;

@Service
public class CursosServiceImpl implements CursosService {

    @Autowired
    private CursosRepository cursosRepository;

    @Override
    public List<Cursos> listarCursos() {
        return cursosRepository.findAll();
    }

    @Override
    public Cursos cadastrarCurso(Cursos curso) {
        return cursosRepository.save(curso);
    }

    @Override
    @Transactional(readOnly = true)
    public Cursos pegarCursoPorId(Long id) {
        return cursosRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso com ID " + id + " não encontrado."));
    }

    @Override
    public Cursos atualizarCurso(Long id, Cursos cursoAtualizado) {
        Optional<Cursos> optionalCurso = cursosRepository.findById(id);
        if (optionalCurso.isPresent()) {
            Cursos cursoExistente = optionalCurso.get();
            cursoExistente.setMateria(cursoAtualizado.getMateria());
            cursoExistente.setDuracao(cursoAtualizado.getDuracao());
            cursoExistente.setDescricao(cursoAtualizado.getDescricao());
            return cursosRepository.save(cursoExistente);
        } else {
            throw new RuntimeException("Curso com ID " + id + " não encontrado para atualização.");
        }
    }

    @Override
    public void deletarCurso(Long id) {
        cursosRepository.findById(id).ifPresentOrElse(
                curso -> cursosRepository.deleteById(id),
                () -> {
                    throw new RuntimeException("Curso com ID " + id + " não encontrado para exclusão.");
                });
    }
}
