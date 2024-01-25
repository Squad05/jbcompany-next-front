import React, { useEffect, useState } from "react";
import styles from "../styles/Tabela_Ultimos_Lancamentos_Home.module.css";
import AulasService from "@/services/AulasService";
import { useRouter } from "next/router";

export default function TabelaUltimasAulasLancadas() {
  const [aulas, setAulas] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const userToken = localStorage.getItem("token");

        // Verifique se o 'id' está disponível antes de fazer a chamada da API
        if (id) {
          const aulasDoUsuario = await AulasService.listarAulasPorEmpresa(
            id,
            userToken
          );

          setAulas(aulasDoUsuario);
        }
      } catch (error) {
        console.error("Erro ao obter aulas do usuário:", error);
      }
    }

    fetchData();
  }, [id]); // Adicione 'id' como dependência para reexecutar o efeito quando 'id' mudar

  return (
    <div className={styles.container}>
      <table className={styles.estilo_tabela}>
        <thead>
          <tr>
            <th>Título da Aula</th>
            <th>Link da Aula</th>
            <th>Descrição da Aula</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(aulas) &&
            aulas.map((aula) => (
              <tr key={aula.id}>
                <td>{aula.titulo}</td>
                <td>
                  <a href={aula.link} target="_blank" rel="noopener noreferrer">
                    {aula.link}
                  </a>
                </td>
                <td>{aula.descricao}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
