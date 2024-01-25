import axios from "axios";
import CursoService from "./CursoService";

class AulaService {
  async cadastrarAulas(aula, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      console.log("infoemações aula");
      console.log(aula);

      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/aulas",
        aula,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar nova aula:", error);
      throw error;
    }
  }

  async listarAulasPorEmpresa(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      console.log(id);
      const response = await axios.get(
        `https://jbcompanyapi.onrender.com/aulas/curso/${id}`,
        { headers }
      );

      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Erro ao listar aulas do usuário:", error);
      throw error;
    }
  }

  async deletarAulas(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(
        `https://jbcompanyapi.onrender.com/aulas/${id}`,
        { headers }
      );
      if (response.status === 204) {
        window.location.reload();
      }
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletar aula com o ID ${id}:`, error);
      throw error;
    }
  }
}

export default new AulaService();
