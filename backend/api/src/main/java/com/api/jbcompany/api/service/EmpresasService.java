package com.api.jbcompany.api.service;

import java.util.List;

import com.api.jbcompany.api.model.Empresas;

public interface EmpresasService {
    List<Empresas> listarEmpresas();

    Empresas cadastrarEmpresas(Empresas empresas);

    Empresas atualizarEmpresas(Long id, Empresas empresasAtualizado);

    void deletarEmpresas(Long id);

    Empresas pegarEmpresasPorId(Long id);
}
