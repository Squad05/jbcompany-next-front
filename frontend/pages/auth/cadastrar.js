import Head from "next/head";
import FormCadastro from "@/components/FormCadastro";
import styles from "../../styles/AuthPage.module.css";
import AuthDivLateral from "@/components/AuthDivLateral";

export default function Cadastrar() {
  return (
    <div className={styles.estilo_pagina}>
      <Head>
        <title> Jb Company - Cadastrar </title>
      </Head>
      <main className={styles.container_principal}>
        <AuthDivLateral />
        <FormCadastro />
      </main>
    </div>
  );
}
