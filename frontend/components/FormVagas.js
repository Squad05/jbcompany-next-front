import React, { useState } from "react";
import styles from "../styles/FormsDashboard.module.css";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter } from "next/router";
import VagaService from "@/services/VagaService";

import {
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";

export default function FormularioVagas() {
  const [descricao, setDescricao] = useState("");
  const [cep, setCep] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [funcao, setFuncao] = useState("");
  const [statusVaga, setStatusVaga] = useState("");
  const [salario, setSalario] = useState("");

  const token = localStorage.getItem("token");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      descricao,
      cep,
      localizacao,
      funcao,
      status_vaga: statusVaga,
      salario,
    };

    try {
      const response = await VagaService.cadastrarVagas(dados, token);
      router.push("/dashboard/vagas");
    } catch (erro) {
      console.error("Erro ao enviar requisição:", erro.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.estiloFormularioDashBoard}>
      <Typography
        className={styles.tituloFormulario}
        variant="h1"
        component="h1"
      >
        <WorkIcon fontSize="large" style={{ marginRight: 10 }} />
        Inserir Vagas
      </Typography>

      <InputLabel htmlFor="descricao">Descrição</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="descricao"
          aria-describedby="Digite a descrição"
          value={descricao}
          className={styles.formControlDashBoardInput}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="cep">CEP</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="cep"
          aria-describedby="Digite o CEP"
          value={cep}
          className={styles.formControlDashBoardInput}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="localizacao">Localização</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="localizacao"
          aria-describedby="Digite a localização"
          value={localizacao}
          className={styles.formControlDashBoardInput}
          onChange={(e) => setLocalizacao(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="funcao">Função</InputLabel>
      <FormControl fullWidth>
        <input
          id="funcao"
          aria-describedby="Digite a função"
          value={funcao}
          className={styles.formControlDashBoardInput}
          onChange={(e) => setFuncao(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel id="statusVaga-label">Status da Vaga</InputLabel>
      <FormControl fullWidth>
        <select
          labelId="statusVaga-label"
          id="statusVaga"
          className={styles.formControlDashBoardInput}
          value={statusVaga}
          onChange={(e) => setStatusVaga(e.target.value)}
          required
        >
          <option value="true">Ativa</option>
          <option value="false">Não Ativa</option>
        </select>
      </FormControl>

      <InputLabel htmlFor="salario">Salário</InputLabel>
      <FormControl fullWidth>
        <input
          id="salario"
          type="number"
          aria-describedby="Digite o salário"
          value={salario}
          className={styles.formControlDashBoardInput}
          onChange={(e) => setSalario(Number(e.target.value))}
          required
        />
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
        type="submit"
      >
        Cadastrar
      </Button>
    </form>
  );
}
