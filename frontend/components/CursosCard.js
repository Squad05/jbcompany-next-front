import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import CursoService from "@/services/CursoService";
import styles from "../styles/VagasDashBoardCard.module.css";
import { extrairEmailDoToken } from "@/services/auth/EmailToken";
import Link from "next/link";

const CursoCard = ({ curso }) => {
  const handleEdit = () => {
    console.log(`Editar curso: ${curso.materia}`);
  };

  const handleDelete = async () => {
    try {
      const userToken = localStorage.getItem("token");
      await CursoService.deletarCursos(curso.id, userToken);
      onDeleteSuccess();
      console.log(`Excluir curso: ${curso.materia}`);
    } catch (error) {
      console.error(`Erro ao excluir curso: ${error.message}`);
    }
  };

  return (
    <Card className={styles.estilo_card}>
      <CardContent className={styles.estilo_card_header}>
        <Link href={`/dashboard/cursos/aulas/${curso.id}`}>
         <Typography className={styles.estilo_header_titulo} variant="h4">
            {curso.materia}
          </Typography>
        </Link>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Descrição do Curso:  <span className={styles.estilo_valores_vaga}>{curso.descricao}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Duração:  <span className={styles.estilo_valores_vaga}>{curso.duracao}</span>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleEdit}
            className={styles.card_botao_editar_acoes}
          >
            Editar
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            className={styles.card_botao_excluir_acoes}
          >
            Excluir
          </Button>
        </Box>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
    </Card >
  );
};

CursoCard.propTypes = {
  curso: PropTypes.shape({
    materia: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    duracao: PropTypes.string.isRequired,
  }).isRequired,
};

const CursoCardList = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const userToken = localStorage.getItem("token");

        const userEmail = extrairEmailDoToken(userToken);

        const listaCursos = await CursoService.listarCursosPorEmpresa(
          userEmail,
          userToken
        );

        setCursos(listaCursos);
      } catch (error) {
        console.error("Erro ao listar cursos:", error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {cursos.map((curso, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <CursoCard curso={curso} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CursoCardList;
