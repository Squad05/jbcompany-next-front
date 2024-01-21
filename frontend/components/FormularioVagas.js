import axios from "axios";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";


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
      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/vagas",
        dados,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response", response);

      router.push('/dashboard/vagas');
    } catch (erro) {
      console.error("Erro ao enviar requisição:", erro.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h1" component="h1">
        Formulário
      </Typography>

      <FormControl fullWidth>
        <InputLabel htmlFor="descricao">Descrição</InputLabel>
        <Input
          id="descricao"
          aria-describedby="Digite a descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="cep">CEP</InputLabel>
        <Input
          id="cep"
          aria-describedby="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="localizacao">Localização</InputLabel>
        <Input
          id="localizacao"
          aria-describedby="Digite a localização"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="funcao">Função</InputLabel>
        <Input
          id="funcao"
          aria-describedby="Digite a função"
          value={funcao}
          onChange={(e) => setFuncao(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="statusVaga-label">Status da Vaga</InputLabel>
        <Select
          labelId="statusVaga-label"
          id="statusVaga"
          value={statusVaga}
          onChange={(e) => setStatusVaga(e.target.value)}
          required
        >
          <MenuItem value="Ativa">Ativa</MenuItem>
          <MenuItem value="Não Ativa">Não Ativa</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="salario">Salário</InputLabel>
        <Input
          id="salario"
          type="number"
          aria-describedby="Digite o salário"
          value={salario}
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
        Enviar
      </Button>
    </form>
  );
}
