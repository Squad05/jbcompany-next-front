import axios from "axios";

class VagaService {
  async listarVagas() {
    try {
      const response = await axios.get(
        "https://jbcompanyapi.onrender.com/vagas"
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
      throw error;
    }
  }

  async listarVagasPorEmpresa(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `https://jbcompanyapi.onrender.com/vagas/listar/${id}`,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas do usuário:", error);
      throw error;
    }
  }

  async deletarVagas(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };


      const response = await axios.delete(`https://jbcompanyapi.onrender.com/vagas/${id}`, { headers });
      if (response.status === 204) {
        window.location.reload();
      }
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletar vaga com o ID ${id}:`, error);
      throw error;
    }
  }
}

export default new VagaService();
