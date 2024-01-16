import React, { useCallback, useState } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Stack,
    TextField
} from '@mui/material';

export const ConfiguracaoUser = () => {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = useCallback(
        (event) => {
            setValues((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }));
        },
        []
    );

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
        },
        []
    );

    return (
        <form onSubmit={handleSubmit}>
            <Card sx={{ maxWidth: 1300, margin: 'auto', mt: 15, mb: 15, mr: 1 }}>
                <CardHeader subheader="Atualize sua conta" title="Conta" />
                <Divider />
                <CardContent>
                    <Stack spacing={2} sx={{ maxWidth: 1300, margin: 'auto' }}>
                        <TextField
                            fullWidth
                            label="Nome"
                            name="text"
                            onChange={handleChange}
                            type="password"
                            value={values.nome}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                        />
                        <TextField
                            fullWidth
                            label="Senha"
                            name="password"
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                        />
                        <TextField
                            fullWidth
                            label="Senha (Confirmação)"
                            name="confirm"
                            onChange={handleChange}
                            type="password"
                            value={values.confirm}
                        />
                    </Stack>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-start', marginLeft: 1 }}>
                    <Button variant="contained">Atualizar</Button>
                </CardActions>
            </Card>
        </form>
    );
};
