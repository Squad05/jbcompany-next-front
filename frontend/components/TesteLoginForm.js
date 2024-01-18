// components/TesteLoginForm.js

import { useState } from 'react';
import styles from '@/styles/TesteLoginForm.module.css';

const TesteLoginForm = ({ onSubmit }) => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de manipulação dos dados do formulário
        console.log('Dados do formulário de login:', { login, senha });
        // Chame a função onSubmit se necessário
        onSubmit({ login, senha });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Login:
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
            </label>
            <br />

            <label>
                Senha:
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
            </label>
            <br />

            <button type="submit">Entrar</button>
        </form>
    );
};

export default TesteLoginForm;
