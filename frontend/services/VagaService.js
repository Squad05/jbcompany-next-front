import axios from "axios";

class VagaService {
  async listarVagas() {
    try {
      const response = await axios.get("https://jbcompanyapi.onrender.com/vagas");
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

      const response = await axios.get(`https://jbcompanyapi.onrender.com/vagas/listar/${id}`, { headers });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas do usuário:", error);
      throw error;
    }
  }
}

export default new VagaService();
