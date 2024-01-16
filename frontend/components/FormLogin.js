import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/FormLandingPage.module.css";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
} from "@mui/material";

export default function FormLogin() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [errorMensagem, setErrorMensagem] = useState("");
  const router = useRouter(); // Utilize useRouter para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      email,
      senha,
    };

    try {
      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/auth/logar",
        dados
      );

      console.log("response" + response);

      if (response.data) {
        const { token } = response.data;

        localStorage.setItem("token", token);

        router.push("/dashboard/vagas"); // Utilize router.push para navegar

        console.log("token " + token);
      } else {
        setErrorMensagem("Email ou senha invalidos");
      }
    } catch (erro) {
      console.error("Erro ao enviar requisição:", erro.message);
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
