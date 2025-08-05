import React, { useEffect, useState } from "react";
import { buscarClimaPorCidade } from "../services/climaService";

function CardClima() {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cidade, setCidade] = useState(localStorage.getItem("cidade") || "Brasília");

  useEffect(() => {
    async function carregarClima() {
      const dados = await buscarClimaPorCidade(cidade);
      setClima(dados);
      setLoading(false);
    }
    carregarClima();
  }, [cidade]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setCidade(localStorage.getItem("cidade") || "Brasília");
    });
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (loading) {
    return (
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Clima Agora</h5>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!clima) {
    return (
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Clima Agora</h5>
          <p>Erro ao carregar os dados.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card text-center shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Clima Agora - {clima.name}</h5>
        <img
          src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
          alt={clima.weather[0].description}
        />
        <p className="card-text">
          <strong>{Math.round(clima.main.temp)}°C</strong>
        </p>
        <p>{clima.weather[0].description}</p>
        <small>
          Umidade: {clima.main.humidity}% | Vento: {clima.wind.speed} km/h
        </small>
      </div>
    </div>
  );
}

export default CardClima;
