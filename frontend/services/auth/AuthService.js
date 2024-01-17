import axios from "axios";

const login = async (email, senha) => {
  try {
    const dados = {
      email,
      senha,
    };

    const response = await axios.post(
      "https://jbcompanyapi.onrender.com/auth/logar",
      dados
    );
    console.log(response);

    if (response.data) {
      const { token } = response.data;

      localStorage.setItem("token", token);
      return token;
    } else {
      throw new Error("Email ou senha inválidos");
    }
  } catch (erro) {
    throw new Error("Erro ao enviar requisição: " + erro.message);
  }
};

export { login };
