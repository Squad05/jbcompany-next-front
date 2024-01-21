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
        <Typography className={styles.estilo_card_header_titulo} variant="h5">
          {curso.materia}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Descrição do Curso: {curso.descricao}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Duração: {curso.duracao}
        </Typography>
      </CardContent>
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
    </Card>
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
