import styles from "../styles/Dashboard.module.css";
import React, { useEffect, useState } from "react";
import UserService from "@/services/UserService";

export default function MensagemBoasVindas() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const userToken = localStorage.getItem("token");
        const { nome } = await UserService.detalhesUsuario(userToken);
        setNomeUsuario(nome);
      } catch (error) {
        onsole.error("Erro ao buscar detalhes do Usuário", error);
      }
    }
    fetchData();
  }, []);

  return (
    <h1 className={styles.estilo_titulo_sessao}>
      {" "}
      Bem vindo(a), {nomeUsuario}{" "}
    </h1>
  );
}
