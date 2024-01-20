import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Typography,
    Button,
} from '@mui/material';
import VagaService from '@/services/VagaService';
import { extrairEmailDoToken } from '@/services/auth/EmailToken';

const VagaCard = ({ vaga }) => {
    const handleEdit = () => {
        console.log(`Editar vaga: ${vaga.descricao}`);
    };

    const handleDelete = async () => {
        try {
          const userToken = localStorage.getItem('token');
          await VagaService.deletarVagas(vaga.id, userToken);
          onDeleteSuccess();  
        } catch (error) {
          console.error(`Erro ao excluir vaga: ${error.message}`);
        }
      };


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

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                    <Button variant="outlined" color="primary" onClick={handleEdit}>
                        Editar
                    </Button>
                    <Button variant="outlined" color="error" onClick={handleDelete}>
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

                const listaVagas = await VagaService.listarVagasPorEmpresa(userEmail, userToken);
                setVagas(listaVagas);
            } catch (error) {
                console.error('Erro ao buscar vagas:', error);
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
