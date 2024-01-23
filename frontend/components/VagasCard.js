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
import VagaService from "@/services/VagaService";
import { extrairEmailDoToken } from "@/services/auth/EmailToken";
import styles from "../styles/VagasDashBoardCard.module.css";
import Link from "next/link";

const VagaCard = ({ vaga }) => {

  const handleDelete = async () => {
    try {
      const userToken = localStorage.getItem("token");
      await VagaService.deletarVagas(vaga.id, userToken);
      onDeleteSuccess();
    } catch (error) {
      console.error(`Erro ao excluir vaga: ${error.message}`);
    }
  };

  return (
    <Card className={styles.estilo_card}>
      <CardContent className={styles.estilo_card_header}>
        <Typography className={styles.estilo_header_titulo} variant="h4">
          {vaga.funcao}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          <span className={styles.estilo_funcao_vaga}>{vaga.descricao}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Salário:{" "}
          <span className={styles.estilo_valores_vaga}> R${vaga.salario}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Localização:
          <span className={styles.estilo_valores_vaga}>
            {" "}
            {vaga.localizacao}
          </span>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          CEP:
          <span className={styles.estilo_valores_vaga}> {vaga.cep}</span>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Status da Vaga:
          <span className={styles.estilo_valores_vaga}>
            {" "}
            {vaga.status_vaga ? "Aberta" : "Fechada"}
          </span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Link href={`/dashboard/vagas/${vaga.id}`}>
            <Button
              variant="outlined"
              className={styles.card_botao_editar_acoes}
              color="primary"

            >
              Editar
            </Button>
          </Link>
          <Button
            variant="outlined"
            className={styles.card_botao_excluir_acoes}
            color="error"
            onClick={handleDelete}
          >
            Excluir
          </Button>
        </Box>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
    </Card>
  );
};

VagaCard.propTypes = {
  vaga: PropTypes.shape({
    id: PropTypes.number.isRequired,
    descricao: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    localizacao: PropTypes.string.isRequired,
    funcao: PropTypes.string.isRequired,
    status_vaga: PropTypes.bool.isRequired,
    salario: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const VagaCardList = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = localStorage.getItem("token");

        const userEmail = extrairEmailDoToken(userToken);

        const listaVagas = await VagaService.listarVagasPorEmpresa(
          userEmail,
          userToken
        );
        setVagas(listaVagas);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteVaga = (vagaId) => {
    setVagas((prevVagas) => prevVagas.filter((vaga) => vaga.id !== vagaId));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {vagas.map((vaga, index) => (
          <Grid item key={index}>
            <VagaCard vaga={vaga} onDelete={handleDeleteVaga} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VagaCardList;
