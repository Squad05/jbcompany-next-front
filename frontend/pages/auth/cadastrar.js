import Head from "next/head";
import FormCadastro from "@/components/FormCadastro";
import styles from "../../styles/FormLandingPage.module.css";
import Logo from "@/components/Logo";

export default function Cadastrar() {
  return (
    <div className={styles.estilo_pagina}>
      <Head>
        <title> Jb Company - Cadastrar </title>
      </Head>
      <Logo />
      <FormCadastro />
    </div>
  );
}
