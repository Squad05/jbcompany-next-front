import React, { use, useState } from "react";
import { useRouter } from "next/router";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
} from "@mui/material";

import Link from "next/link";
import styles from "../styles/FormLandingPage.module.css";
import { cadastrar } from "@/services/auth/CadastroService";

export default function FormCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMensagem, setErrorMensagem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cadastrarUsuario = await cadastrar(nome, email, senha);
      router.push("/auth/logar");
    } catch (erro) {
      setErrorMensagem(erro.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Typography variant="h2" component="h2">
          É novo por aqui?
        </Typography>
        <Typography variant="h4" component="h4">
          Impacte vidas em todo o mundo na{" "}
          <span className={styles.textoespecial}>JB Company </span>
        </Typography>
      </div>
      <form className={styles.formulario_container} onSubmit={handleSubmit}>
        <Typography cvariant="h3" component="h3">
          - Faça seu <span className={styles.textoespecial}> Cadastro </span> -
        </Typography>

        <InputLabel
          className={styles.formulario_input_label}
          htmlFor="username"
        >
          Nome
        </InputLabel>
        <FormControl fullWidth className={styles.formulario_formcontrol}>
          <Input
            id="nome"
            aria-describedby="Digite seu nome"
            className={styles.formulario_input}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </FormControl>

        <InputLabel className={styles.formulario_input_label} htmlFor="email">
          Email
        </InputLabel>
        <FormControl fullWidth className={styles.formulario_formcontrol}>
          <Input
            id="email"
            className={styles.formulario_input}
            aria-describedby="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <InputLabel className={styles.formulario_input_label} htmlFor="senha">
          Senha
        </InputLabel>
        <FormControl fullWidth className={styles.formulario_formcontrol}>
          <Input
            id="senha"
            type="password"
            aria-describedby="Digite sua senha"
            value={senha}
            className={styles.formulario_input}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </FormControl>

        {errorMensagem && (
          <Typography variant="body2" color="error" gutterBottom>
            {errorMensagem}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
          type="submit"
        >
          Enviar
        </Button>
      </form>
      <div className={styles.container_footer}>
        <Typography variant="h4" component="h4">
          Já tem Conta?
          <Link href="/auth/logar" className={styles.linkespecial}>
            {" "}
            Logar{" "}
          </Link>
        </Typography>
      </div>
    </div>
  );
}
