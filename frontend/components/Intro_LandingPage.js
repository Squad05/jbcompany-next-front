import React, { useEffect, useState } from "react";
import styles from "../styles/Intro_LandingPage.module.css";
import VagaService from "@/services/VagaService";

export default function Intro_LandingPage() {
  const [totalVagas, setTotalVagas] = useState(0);

  useEffect(() => {
    const fetchTotalVagas = async () => {
      console.log("oi");

      try {
        console.log("oi");
        const listaVagas = await VagaService.listarVagas();
        const total = listaVagas.length;

        console.log(listaVagas);

        setTotalVagas(total);
      } catch (error) {
        console.error("Erro ao buscar " + error);
      }
    };

    fetchTotalVagas();
  }, []);

  return (
    <div className={styles.intro_div}>
      <div className={styles.div_texto}>
        <span>Conectamos oportunidades</span>
        <h2>JB COMPANY</h2>
        <h3>Impacte Mulheres por todo o mundo</h3>
        <span>+ {totalVagas} vagas postadas</span>
      </div>
      <div>
        <img src="imagens/mulheres_imagem_home.png" alt="Mulheres" />
      </div>
    </div>
  );
}
