import { useRouter } from "next/router";
import React, { useState } from "react";
import { login } from "@/services/auth/AuthService";
import styles from "../styles/FormLandingPage.module.css";

import {
  FormControl,
  InputLabel,
  Input,
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
      router.push("/dashboard/vagas");
    } catch (erro) {
      setErrorMensagem(erro.message);
    }
  };

  return (
    <form className={styles.formulario_container} onSubmit={handleSubmit}>
      <Typography variant="h1" component="h1">
        Login
      </Typography>

      <FormControl fullWidth>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          aria-describedby="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="senha">Senha</InputLabel>
        <Input
          id="senha"
          type="password"
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
  );
}
