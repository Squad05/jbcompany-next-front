import React, { useEffect, useState } from "react";
import VagaService from "@/services/VagaService";
import styles from "../styles/Tabela_Ultimos_Lancamentos_Home.module.css";
import { extrairEmailDoToken } from "@/services/auth/EmailToken";

export default function TabelaUltimasVagasLancadas() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userToken = localStorage.getItem("token");
        const userEmail = extrairEmailDoToken(userToken);

        const vagasDoUsuario = await VagaService.listarVagasPorEmpresa(
          userEmail,
          userToken
        );

        const ultimasCincoVagas = vagasDoUsuario.slice(-5);
        setVagas(ultimasCincoVagas);
      } catch (error) {
        console.error("Erro ao obter vagas do usuário:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.estilo_tabela}>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Localização</th>
            <th>Função</th>
            <th>Salário</th>
          </tr>
        </thead>
        <tbody>
          {vagas.map((vaga) => (
            <tr key={vaga.id}>
              <td>{vaga.descricao}</td>
              <td>{vaga.localizacao}</td>
              <td>{vaga.funcao}</td>
              <td>{vaga.salario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
