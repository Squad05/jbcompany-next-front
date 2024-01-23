import React, { useEffect, useState } from "react";
import CursoService from "@/services/CursoService";
import styles from "../styles/Tabela_Ultimos_Lancamentos_Home.module.css";
import { extrairEmailDoToken } from "@/services/auth/EmailToken";

export default function TabelaUltimosCursosLancados() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
       
        const userToken = localStorage.getItem("token");
        const userEmail = extrairEmailDoToken(userToken)
        
        const cursosDoUsuario = await CursoService.listarCursosPorEmpresa(userEmail, userToken);

       
        const ultimosCincoCursos = cursosDoUsuario.slice(-5);
        setCursos(ultimosCincoCursos);
       
      } catch (error) {
        console.error("Erro ao obter cursos:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.estilo_tabela}>
        <thead>
          <tr>
            <th>Matéria</th>
            <th>Duração</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.materia}</td>
              <td>{curso.duracao}</td>
              <td>{curso.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
