import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import CursoService from '@/services/CursoService';
import { extrairEmailDoToken } from '@/services/auth/EmailToken';

const CursoCard = ({ curso }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <CardContent>
                <Typography align="center" gutterBottom variant="h5">
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
                
                const cursosData = await CursoService.listarCursos(userToken);
                setCursos(cursosData);
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
