import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/simple/price";
const HISTORICO_URL = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart";

// Cotação atual de várias moedas
export async function buscarCotacao() {
  try {
    const resposta = await axios.get(BASE_URL, {
      params: {
        ids: "bitcoin,ethereum,binancecoin",
        vs_currencies: "usd,brl"
      }
    });
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar criptomoedas:", erro);
    return null;
  }
}

// Histórico de preços do Bitcoin (7 dias)
export async function buscarHistoricoBitcoin() {
  try {
    const resposta = await axios.get(HISTORICO_URL, {
      params: {
        vs_currency: "brl",
        days: 7,
        interval: "daily"
      }
    });
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar histórico do Bitcoin:", erro);
    return null;
  }
}
