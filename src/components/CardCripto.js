import React, { useEffect, useState } from "react";
import { buscarCotacao } from "../services/criptoService";

function CardCripto() {
  const [cotacoes, setCotacoes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarCotacoes() {
      const dados = await buscarCotacao();
      setCotacoes(dados);
      setLoading(false);
    }
    carregarCotacoes();
  }, []);

  if (loading) {
    return (
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Criptomoedas</h5>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!cotacoes) {
    return (
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Criptomoedas</h5>
          <p>Erro ao carregar as cotações.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card text-center shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Cotação de Criptomoedas</h5>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin (BTC): R$ {cotacoes.bitcoin.brl.toLocaleString("pt-BR")} 
          </li>
          <li className="list-group-item">
            Ethereum (ETH): R$ {cotacoes.ethereum.brl.toLocaleString("pt-BR")}
          </li>
          <li className="list-group-item">
            Binance Coin (BNB): R$ {cotacoes.binancecoin.brl.toLocaleString("pt-BR")}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardCripto;
