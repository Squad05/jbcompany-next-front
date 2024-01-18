  
import { useState } from 'react';

const CadastroForm = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nome, login, senha });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>
      <br />

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

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroForm;
