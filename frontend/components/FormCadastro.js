import React, { use, useState } from "react";
import axios from "axios";

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

export default function FormCadastro() {
  // Estados para os campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMensagem, setErrorMensagem] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      nome,
      email,
      senha,
    };

    console.log(dados);

    try {
      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/auth/cadastrar",
        dados
      );
      console.log("Resposta do servidor:", response.data);
    } catch (erro) {
      console.error("Erro ao enviar requisição:", erro.message);
      if (erro.response && erro.response.status === 409) {
        setErrorMensagem(
          "Usuário já existe. Por favor, escolha outro nome ou email."
        );
      } else {
        setErrorMensagem(
          "Erro ao processar a requisição. Tente novamente mais tarde."
        );
      }
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
