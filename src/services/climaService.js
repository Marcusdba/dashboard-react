import axios from "axios";

const API_KEY = "50d36628c9949a92352fe1a1ae65dd08"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function buscarClimaPorCidade(cidade = "Brasília") {
  try {
    const resposta = await axios.get(BASE_URL, {
      params: {
        q: cidade,
        appid: API_KEY,
        units: "metric",
        lang: "pt_br"
      }
    });

    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar o clima:", erro);
    return null;
  }
}
