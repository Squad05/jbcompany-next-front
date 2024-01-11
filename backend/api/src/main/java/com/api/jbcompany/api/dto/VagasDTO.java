package com.api.jbcompany.api.dto;

public record VagasDTO(Long empresaId, String descricao, String cep, String localizacao, String funcao,
        boolean status_vaga, int salario) {

}
