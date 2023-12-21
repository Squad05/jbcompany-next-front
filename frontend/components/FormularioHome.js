import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Formulario = ({ onClose, tipo }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (tipo === 'cadastrar') {
            if (!nome || !email || !senha) {
                return;
            }
        } else {
            if (!email || !senha) {
                return;
            }
        }
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '300px' }}>
            {tipo === 'cadastrar' && (
                <TextField
                    label="Nome"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            )}
            <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                {tipo === 'cadastrar' ? 'Cadastrar' : 'Entrar'}
            </Button>
        </form>
    );
};

export default Formulario;
