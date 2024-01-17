import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import Cursos from '@/data/dataCursos';

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
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {Cursos.map((curso, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <CursoCard curso={curso} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CursoCardList;
