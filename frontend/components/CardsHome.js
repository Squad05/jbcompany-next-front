import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";

import styles from "../styles/CardsDashBoardHome.module.css";

const CardsHome = () => {
  const projetos = [
    {
      titulo: "Vagas",
      postada: 10,
      aplicada: 5,
      icon: <WorkIcon />,
    },
    {
      titulo: "Cursos",
      postada: 5,
      cursando: 15,
      icon: <SchoolIcon />,
    },
    {
      titulo: "Mulheres Impactadas",
      pessoasImpactadas: 50,
      projetoEmpoderamento: 10,
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
                      Vagas Aplicadas{" "}
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
                      Pessoas Cursando
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
