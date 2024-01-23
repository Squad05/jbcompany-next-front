import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import cards from "../data/dataCards";
import styles from "../styles/Cards.module.css";

import { useEffect } from "react";

export default function Cards() {
  useEffect(() => {
    console.log("efeito");
  });
  return (
    <Container maxWidth="lg" id="sobre" className={styles.container_cards}>
      <Grid container spacing={3}>
        {cards.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className={styles.caixacard}
              sx={{ maxWidth: 345 }}
              style={{
                padding: "20px",
                marginBottom: "30px",
                marginTop: "30px",
              }}
            >
              <CardMedia
                className={styles.imgcard}
                component="img"
                height="170"
                image={step.imagem}
                alt={step.titulo}
              />
              <CardContent>
                <Typography
                  className={styles.titulocard}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {step.titulo}
                </Typography>
                <Typography
                  className={styles.descricaocard}
                  variant="body2"
                  color="text.secondary"
                >
                  {step.descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
