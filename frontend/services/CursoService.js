import axios from "axios";

class CursoService {
  async listarCursos() {
    try {
      const response = await axios.get(
        "https://jbcompanyapi.onrender.com/cursos"
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao listar cursos:", error);
      throw error;
    }
  }

  async listarCursosPorEmpresa(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `https://jbcompanyapi.onrender.com/cursos/listar/${id}`,
        { headers }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao listar cursos do usuário:", error);
      throw error;
    }
  }

  async deletarCursos(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(
        `https://jbcompanyapi.onrender.com/cursos/${id}`,
        { headers }
      );
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

export default new CursoService();
