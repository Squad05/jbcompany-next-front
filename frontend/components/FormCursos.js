import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import SchoolIcon from "@mui/icons-material/School";
import styles from "../styles/FormsDashboard.module.css";
import CursoService from "@/services/CursoService";

export default function FormularioCursos() {
  const [materia, setMateria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");
  const [categoria, setCategoria] = useState("");

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const curso = {
      materia,
      descricao,
      duracao,
      categoria,
    };

    try {
      const response = await CursoService.cadastrarCursos(curso, token);
      router.push('/dashboard/cursos');
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
        <SchoolIcon fontSize="large" style={{ marginRight: 10 }} />
        Formulário de Cursos
      </Typography>

      <InputLabel htmlFor="materia">Matéria</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="materia"
          className={styles.formControlDashBoardInput}
          aria-describedby="Digite a matéria"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="descricao">Descrição</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="descricao"
          className={styles.formControlDashBoardInput}
          aria-describedby="Digite a descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="duracao">Duração</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="duracao"
          className={styles.formControlDashBoardInput}
          aria-describedby="Digite a duração"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="categoria">Categoria</InputLabel>
      <FormControl fullWidth >
        <select
          id="categoria"
          className={styles.formControlDashBoardInput}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option disabled value="">
            Selecione uma categoria
          </option>
          <option value="Tecnologia">Tecnologia da Informação</option>
          <option value="Negocios">Negocios</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Produtividade">Produtividade</option>
          <option value="Jogos">Jogos</option>
          <option value="Linguas">Linguas</option>
        </select>
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
