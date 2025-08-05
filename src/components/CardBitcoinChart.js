import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { buscarHistoricoBitcoin } from "../services/criptoService";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Registrando os módulos do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CardBitcoinChart() {
  const [dadosGrafico, setDadosGrafico] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarHistorico() {
      const dados = await buscarHistoricoBitcoin();
      if (dados && dados.prices) {
        const labels = dados.prices.map((p) =>
          new Date(p[0]).toLocaleDateString("pt-BR")
        );
        const valores = dados.prices.map((p) => p[1]);

        setDadosGrafico({
          labels,
          datasets: [
            {
              label: "Preço do Bitcoin (R$)",
              data: valores,
              borderColor: "rgba(255, 206, 86, 1)",
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              fill: true,
            },
          ],
        });
      }
      setLoading(false);
    }
    carregarHistorico();
  }, []);

  if (loading) {
    return (
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Histórico do Bitcoin</h5>
          <p>Carregando gráfico...</p>
        </div>
      </div>
    );
  }

  if (!dadosGrafico) {
    return (
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Histórico do Bitcoin</h5>
          <p>Erro ao carregar os dados.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center">Histórico do Bitcoin (últimos 7 dias)</h5>
        <Line data={dadosGrafico} />
      </div>
    </div>
  );
}

export default CardBitcoinChart;
