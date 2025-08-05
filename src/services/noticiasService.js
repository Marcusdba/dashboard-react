import axios from "axios";

const API_KEY = "548ca86b393b4d87810372f2aadf03d5"; 
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export async function buscarNoticias() {
  try {
    const resposta = await axios.get(BASE_URL, {
      params: {
        country: "us",        // troque de "br" para "us" se não aparecer nada
        category: "business", // ou use "general" para mais resultados
        pageSize: 5,
        apiKey: API_KEY
      }
    });

    if (resposta.data.articles && resposta.data.articles.length > 0) {
      return resposta.data.articles;
    } else {
      console.warn("Nenhuma notícia retornada pela API.");
      return [];
    }
  } catch (erro) {
    console.error("Erro ao buscar notícias:", erro);
    return [];
  }
}
