import axios from "axios";

class UserService {
  async detalhesUsuario(token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        "https://jbcompanyapi.onrender.com/auth/detalhes",
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar detalhes do Usuário", error);
      throw error;
    }
  }
}

export default new UserService();
