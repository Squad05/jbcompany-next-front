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
      const buscarQuantidadeCandidatas = await axios.get(
        "https://jbcompanyapi.onrender.com/candidaturas/contarPorEmpresa",
        { headers }
      );

      const buscarQuantidadeCandidatasCursos = await axios.get(
        "https://jbcompanyapi.onrender.com/candidaturas-cursos/contarPorEmpresa",
        { headers }
      );

      const quantidadeImpactadas =
        buscarQuantidadeCandidatasCursos.data + buscarQuantidadeCandidatas.data;

      const UserDetails = {
        ...response.data,
        qtdCandidatas: buscarQuantidadeCandidatas.data,
        qtdCandidatasCursos: buscarQuantidadeCandidatasCursos.data,
        qtdImpactadas: quantidadeImpactadas,
      };

      return UserDetails;
    } catch (error) {
      console.error("Erro ao buscar detalhes do Usuário", error);
      throw error;
    }
  }

  async editarUsuario(token, valores) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        "https://jbcompanyapi.onrender.com/auth/editar",
        valores,
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
