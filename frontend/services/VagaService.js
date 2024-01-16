import axios from "axios";
class VagaService {
  async listarVagas() {
    try {
      const response = await axios("https://jbcompanyapi.onrender.com/vagas");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
      throw error;
    }
  }
}

export default new VagaService();
