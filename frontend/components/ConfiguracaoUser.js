import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  InputLabel,
  FormControl,
} from "@mui/material";
import styles from "../styles/FormsDashboard.module.css";
import UserService from "@/services/UserService";

import { useRouter } from "next/router";

export const ConfiguracaoUser = () => {
  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    descricao: "",
    areaAtuacao: "",
  });

  const token = localStorage.getItem("token");
  const router = useRouter();

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const obterDetalhesUsuario = async () => {
    try {
      const detalhesUsuario = await UserService.detalhesUsuario(token);

      setValues({
        nome: detalhesUsuario.nome,
        telefone: detalhesUsuario.telefone,
        email: detalhesUsuario.email,
        senha: "",
        confirmarSenha: "",
        descricao: detalhesUsuario.descricao,
        areaAtuacao: detalhesUsuario.area_de_atuacao,
      });
    } catch (error) {
      console.error("Erro ao obter detalhes do usuário:", error);
    }
  };

  useEffect(() => {
    if (token) {
      obterDetalhesUsuario();
    } else {
      router.push("/login");
    }
  }, [token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await UserService.editarUsuario(token, values);

      router.push("/dashboard/home");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.estiloFormularioDashBoard}>
      <CardHeader subheader="Atualize sua conta" title="Conta" />
      <Divider />
      <CardContent>
        <Stack spacing={2}>
          <InputLabel className={styles.formControlDashBoard} htmlFor="nome">
            Nome
          </InputLabel>
          <input
            className={styles.formControlDashBoardInput}
            fullWidth
            id="nome"
            name="nome"
            onChange={handleChange}
            value={values.nome}
          />

          <InputLabel
            className={styles.formControlDashBoard}
            htmlFor="telefone"
          >
            Telefone
          </InputLabel>
          <input
            className={styles.formControlDashBoardInput}
            fullWidth
            id="telefone"
            name="telefone"
            onChange={handleChange}
            value={values.telefone}
          />

          <InputLabel className={styles.formControlDashBoard} htmlFor="email">
            Email
          </InputLabel>
          <input
            className={styles.formControlDashBoardInput}
            fullWidth
            id="email"
            name="email"
            onChange={handleChange}
            type="email"
            value={values.email}
          />

          <InputLabel className={styles.formControlDashBoard} htmlFor="senha">
            Senha
          </InputLabel>
          <input
            className={styles.formControlDashBoardInput}
            fullWidth
            id="senha"
            name="senha"
            onChange={handleChange}
            type="password"
            value={values.senha}
          />

          <InputLabel
            className={styles.formControlDashBoard}
            htmlFor="confirmarSenha"
          >
            Senha (Confirmação)
          </InputLabel>
          <input
            className={styles.formControlDashBoardInput}
            fullWidth
            id="confirmarSenha"
            name="confirmarSenha"
            onChange={handleChange}
            type="password"
            value={values.confirmarSenha}
          />

          <InputLabel
            className={styles.formControlDashBoard}
            htmlFor="descricao"
          >
            Descrição
          </InputLabel>
          <input
            className={styles.formControlDashBoardInput}
            fullWidth
            id="descricao"
            name="descricao"
            onChange={handleChange}
            value={values.descricao}
          />

          <InputLabel
            className={styles.formControlDashBoard}
            htmlFor="areaAtuacao"
          >
            Área de Atuação
          </InputLabel>
          <FormControl fullWidth>
            <select
              className={styles.formControlDashBoardInput}
              id="areaAtuacao"
              name="areaAtuacao"
              value={values.areaAtuacao}
              onChange={handleChange}
            >
              <option value="tecnologia">Tecnologia da Informação</option>
              <option value="marketing">Marketing</option>
              <option value="financas">Finanças</option>
              <option value="rh">Recursos Humanos</option>
              <option value="vendas">Vendas</option>
              <option value="producao">Produção</option>
              <option value="logistica">Logística</option>
              <option value="juridico">Jurídico</option>
              <option value="educacao">Educação</option>
              <option value="saude">Saúde</option>
              <option value="consultoria">Consultoria</option>
            </select>
          </FormControl>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-start", marginLeft: 1 }}>
        <Button variant="contained" type="submit">
          Atualizar
        </Button>
      </CardActions>
    </form>
  );
};
