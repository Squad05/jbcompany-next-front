import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import VagaService from "@/services/VagaService";
import { extrairEmailDoToken } from "@/services/auth/EmailToken";
import styles from "../styles/CardsDashBoardHome.module.css";
import CursoService from "@/services/CursoService";
import UserService from "@/services/UserService";

const CardsHome = () => {
  const [vagasPostadas, setVagasPostadas] = useState(0);
  const [candidaturasVagas, setCandidaturasVagas] = useState(0);
  const [candidaturasCursos, setCandidaturasCursos] = useState(0);
  const [pessoasImpactadas, setPessoasImpactadas] = useState(0);

  const [cursosPostados, setCursosPostados] = useState(0);

  useEffect(() => {
    async function fetchVagasPostadas() {
      try {
        const userToken = localStorage.getItem("token");
        const userEmail = extrairEmailDoToken(userToken);

        const vagasDoUsuario = await VagaService.listarVagasPorEmpresa(
          userEmail,
          userToken
        );

        const detalhesUsuario = await UserService.detalhesUsuario(userToken);
        setCandidaturasVagas(detalhesUsuario.qtdCandidatas);
        setCandidaturasCursos(detalhesUsuario.qtdCandidatasCursos);
        setPessoasImpactadas(detalhesUsuario.qtdImpactadas);
        setVagasPostadas(vagasDoUsuario.length);
      } catch (error) {
        console.error("Erro ao obter vagas do usuário:", error);
      }
    }

    fetchVagasPostadas();
  }, []);

  useEffect(() => {
    async function fetchCursosPostados() {
      try {
        const userToken = localStorage.getItem("token");
        const userEmail = extrairEmailDoToken(userToken);

        const cursosDoUsuario = await CursoService.listarCursosPorEmpresa(
          userEmail,
          userToken
        );

        setCursosPostados(cursosDoUsuario.length);
      } catch (error) {
        console.error("Erro ao obter cursos do usuário:", error);
      }
    }

    fetchCursosPostados();
  }, []);
  const projetos = [
    {
      titulo: "Vagas",
      postada: vagasPostadas,
      aplicada: candidaturasVagas,
      icon: <WorkIcon />,
    },
    {
      titulo: "Cursos",
      postada: cursosPostados,
      cursando: candidaturasCursos,
      icon: <SchoolIcon />,
    },
    {
      titulo: "Mulheres Impactadas",
      pessoasImpactadas: pessoasImpactadas,
      icon: <PeopleIcon />,
    },
  ];

  return (
    <div className={styles.container_componente}>
      <Grid container spacing={2} className={styles.container_cards_home}>
        {projetos.map((projeto) => (
          <Grid item key={projeto.titulo} xs={12} sm={6} md={3}>
            <Card className={styles.estilo_card}>
              <CardHeader
                sx={{ display: "flex", flexDirection: "row-reverse" }}
                title={projeto.titulo}
                className={styles.header_card}
                titleTypographyProps={{ variant: "subtitle1" }}
                avatar={
                  <Avatar className={styles.container_icon}>
                    {projeto.icon}
                  </Avatar>
                }
              />
              <CardContent className={styles.body_card}>
                {projeto.titulo === "Vagas" && (
                  <>
                    <Typography className={styles.texto_card}>
                      Vagas Postadas{" "}
                      <span className={styles.texto_valor}>
                        {projeto.postada}
                      </span>
                    </Typography>
                    <Typography className={styles.texto_card}>
                      Candidatas{" "}
                      <span className={styles.texto_valor}>
                        {projeto.aplicada}
                      </span>
                    </Typography>
                  </>
                )}
                {projeto.titulo === "Cursos" && (
                  <>
                    <Typography className={styles.texto_card}>
                      Cursos Postados
                      <span className={styles.texto_valor}>
                        {projeto.postada}
                      </span>
                    </Typography>
                    <Typography className={styles.texto_card}>
                      Cursando
                      <span className={styles.texto_valor}>
                        {projeto.cursando}
                      </span>
                    </Typography>
                  </>
                )}
                {projeto.titulo === "Mulheres Impactadas" && (
                  <>
                    <Typography className={styles.texto_card}>
                      Pessoas Impactadas{" "}
                      <span className={styles.texto_valor}>
                        {projeto.pessoasImpactadas}
                      </span>
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardsHome;
