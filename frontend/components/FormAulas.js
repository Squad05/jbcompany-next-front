import React, { useCallback, useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import SchoolIcon from "@mui/icons-material/School";
import styles from "../styles/FormsDashboard.module.css";
import AulasService from "@/services/AulasService";

export const FormularioAulas = () => {
  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const router = useRouter();

  const cursoId = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aula = {
      titulo,
      curso: parseInt(cursoId.id),
      link,
      descricao,
    };

    try {
      const response = await AulasService.cadastrarAulas(aula, token);

      console.log("response", response);
      router.push("/dashboard/cursos");
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
        Formulário de Aulas
      </Typography>

      <InputLabel htmlFor="titulo">Título da Aula</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="titulo"
          className={styles.formControlDashBoardInput}
          aria-describedby="Digite o título da aula"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="link">Link da Aula</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="link"
          className={styles.formControlDashBoardInput}
          aria-describedby="Digite o link da aula"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </FormControl>

      <InputLabel htmlFor="descricao">Descrição da Aula</InputLabel>
      <FormControl fullWidth className={styles.formControlDashBoard}>
        <input
          id="descricao"
          className={styles.formControlDashBoardInput}
          aria-describedby="Digite a descrição da aula"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
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
};
