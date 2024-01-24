import React, { useEffect, useState } from "react";
import styles from "../styles/Tabela_Ultimos_Lancamentos_Home.module.css";
import AulasService from "@/services/AulasService";
export default function TabelaUltimasAulasLancadas() {
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
               
                const userToken = localStorage.getItem("token");
               

                const aulasDoUsuario = await AulasService.listarAulasPorEmpresa(
                   
                    userToken
                );

                setAulas(aulasDoUsuario);
            } catch (error) {
                console.error("Erro ao obter aulas do usuário:", error);
            }
        }

        fetchData();
    }, []);

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
                    {aulas.map((aula) => (
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
