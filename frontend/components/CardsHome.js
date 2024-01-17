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
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

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
        {
            titulo: "Contribuições",
            totalContribuicoes: 30,
            doacoesDinheiro: 5,
            icon: <MonetizationOnIcon />,
        },
    ];

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <h1>Projetos</h1>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {projetos.map((projeto) => (
                    <Grid item key={projeto.titulo} xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader
                                sx={{display: 'flex', flexDirection: 'row-reverse'}}
                                title={projeto.titulo}
                                titleTypographyProps={{ variant: "subtitle1" }}
                                avatar={<Avatar>{projeto.icon}</Avatar>}
                            />
                            <CardContent>
                                {projeto.titulo === "Vagas" && (
                                    <>
                                        <Typography variant="subtitle2">
                                            Vagas Postadas: {projeto.postada}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Vagas Aplicadas: {projeto.aplicada}
                                        </Typography>
                                    </>
                                )}
                                {projeto.titulo === "Cursos" && (
                                    <>
                                        <Typography variant="subtitle2">
                                            Cursos Postados: {projeto.postada}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Pessoas Enroladas: {projeto.cursando}
                                        </Typography>
                                    </>
                                )}
                                {projeto.titulo === "Mulheres Impactadas" && (
                                    <>
                                        <Typography variant="subtitle2">
                                            Pessoas Impactadas: {projeto.pessoasImpactadas}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Projeto de Empoderamento: {projeto.projetoEmpoderamento}
                                        </Typography>
                                    </>
                                )}
                                {projeto.titulo === "Contribuições" && (
                                    <>
                                        <Typography variant="subtitle2">
                                            Contribuições: {projeto.totalContribuicoes}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Doações em Dinheiro: {projeto.doacoesDinheiro}
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
