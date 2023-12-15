package com.api.jbcompany.api.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.jbcompany.api.model.Empresas;
import com.api.jbcompany.api.repository.EmpresasRepository;
import com.api.jbcompany.api.service.EmpresasService;

@Service
public class EmpresasServiceImpl implements EmpresasService {

    @Autowired
    private EmpresasRepository empresasRepository;

    @Override
    public List<Empresas> listarEmpresas() {
        return empresasRepository.findAll();
    }

    @Override
    @Transactional
    public Empresas cadastrarEmpresas(Empresas empresa) {
        return empresasRepository.save(empresa);
    }

    @Override
    @Transactional
    public Empresas atualizarEmpresas(Long id, Empresas empresaAtualizada) {
        Optional<Empresas> optionalEmpresa = empresasRepository.findById(id);
        if (optionalEmpresa.isPresent()) {
            Empresas empresaExistente = optionalEmpresa.get();
            empresaExistente.setCnpj(empresaAtualizada.getCnpj());
            empresaExistente.setNome(empresaAtualizada.getNome());
            empresaExistente.setTelefone(empresaAtualizada.getTelefone());
            empresaExistente.setEmail(empresaAtualizada.getEmail());
            empresaExistente.setArea_de_atuacao(empresaAtualizada.getArea_de_atuacao());
            empresaExistente.setDescricao(empresaAtualizada.getDescricao());

            return empresasRepository.save(empresaExistente);
        } else {
            throw new RuntimeException("Empresa com ID " + id + " não encontrada para atualização.");
        }
    }

    @Override
    @Transactional
    public void deletarEmpresas(Long id) {
        empresasRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Empresas pegarEmpresasPorId(Long id) {
        return empresasRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Empresa com ID " + id + " não encontrada."));
    }
}
