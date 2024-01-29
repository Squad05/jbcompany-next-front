import { useRouter } from "next/router";
import React, { useState } from "react";
import { login } from "@/services/auth/AuthService";
import styles from "../styles/FormLandingPage.module.css";
import Link from "next/link";

import {
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";

export default function FormLogin() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [errorMensagem, setErrorMensagem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, senha);
      localStorage.setItem("token", token);
      router.push("/dashboard/home");
    } catch (erro) {
      setErrorMensagem("Email ou senha incorretos");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Typography variant="h2" component="h2">
          Bem vindo(a)
        </Typography>
        <Typography variant="h4" component="h4">
          Venha fazer a diferença na{" "}
          <span className={styles.textoespecial}>JB Company </span>
        </Typography>
      </div>
      <form className={styles.formulario_container} onSubmit={handleSubmit}>
        <Typography cvariant="h3" component="h3">
          - Faça seu <span className={styles.textoespecial}> Login </span> -
        </Typography>
        <InputLabel className={styles.formulario_input_label} htmlFor="email">
          Email
        </InputLabel>
        <FormControl fullWidth className={styles.formulario_formcontrol}>
          <input
            id="email"            
            aria-describedby="Digite seu email"
            className={styles.formulario_input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <InputLabel className={styles.formulario_input_label} htmlFor="senha">
          Senha
        </InputLabel>
        <FormControl fullWidth className={styles.formulario_formcontrol}>
          <input
            id="senha"
            type="password"
            className={styles.formulario_input}
            aria-describedby="Digite sua senha"
            value={senha}
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
          Não tem cadastro?
          <Link href="/auth/cadastrar" className={styles.linkespecial}>
            {" "}
            Cadastre-se{" "}
          </Link>
        </Typography>
      </div>
    </div>
  );
}
