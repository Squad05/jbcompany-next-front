import axios from "axios";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@mui/material";

export default function FormularioCursos() {
  const [materia, setMateria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      materia,
      descricao,
      duracao,
    };

    console.log(dados);
    
    try {
      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/cursos",
        dados,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response", response);
      // Realize as ações necessárias após o envio bem-sucedido, se houver.
    } catch (erro) {
      console.error("Erro ao enviar requisição:", erro.message);
      // Trate o erro conforme necessário.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h1" component="h1">
        Formulário de Cursos
      </Typography>

      <FormControl fullWidth>
        <InputLabel htmlFor="materia">Matéria</InputLabel>
        <Input
          id="materia"
          aria-describedby="Digite a matéria"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          required
        />
      </FormControl>

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
        <InputLabel htmlFor="duracao">Duração</InputLabel>
        <Input
          id="duracao"
          aria-describedby="Digite a duração"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
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
