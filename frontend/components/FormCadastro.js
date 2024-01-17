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
import Logo from "./Logo";
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
    <form className={styles.formulario_container} onSubmit={handleSubmit}>
      <Typography variant="h1" component="h1">
        Cadastro
      </Typography>

      <FormControl fullWidth>
        <InputLabel htmlFor="username">Nome</InputLabel>
        <Input
          id="nome"
          aria-describedby="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </FormControl>

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
