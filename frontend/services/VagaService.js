import axios from "axios";

class VagaService {

  async cadastrarVagas(vaga, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/vagas",
        vaga,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao postar nova vaga:", error);
      throw error;
    }
  }

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

  async atualizarVagas(id, token, valores) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `https://jbcompanyapi.onrender.com/vagas/${id}`,
        valores,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.log("Erro ao buscar detalhes de Vagas", error);
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
