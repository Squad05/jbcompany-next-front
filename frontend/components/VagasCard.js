import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import Vagas from '@/data/dataVagas';

const VagaCard = ({ vaga }) => {
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
                    {vaga.descricao}
                </Typography>
            </CardContent>
            <Divider />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    Descrição da Vaga: {vaga.descricao}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    CEP: {vaga.cep}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Localização: {vaga.localizacao}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Função: {vaga.funcao}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Status da Vaga: {vaga.status_vaga ? 'Aberta' : 'Fechada'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Salário: R${vaga.salario}
                </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
        </Card>
    );
};

VagaCard.propTypes = {
    vaga: PropTypes.shape({
        descricao: PropTypes.string.isRequired,
        cep: PropTypes.string.isRequired,
        localizacao: PropTypes.string.isRequired,
        funcao: PropTypes.string.isRequired,
        status_vaga: PropTypes.bool.isRequired,
        salario: PropTypes.number.isRequired,
    }).isRequired,
};

const VagaCardList = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent={{ xs: 'center', lg: 'flex-end' }}>
                {Vagas.map((vaga, index) => (
                    <Grid item key={index}>
                        <VagaCard vaga={vaga} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default VagaCardList;
