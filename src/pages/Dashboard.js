import React from "react";
import CardClima from "../components/CardClima";
import CardCripto from "../components/CardCripto";
import CardBitcoinChart from "../components/CardBitcoinChart";
import CardNoticias from "../components/CardNoticias";

function Dashboard() {
  return (
    <div>
      <h2>Bem-vindo ao Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <CardClima />
        </div>
        <div className="col-md-6">
          <CardCripto />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <CardBitcoinChart />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <CardNoticias />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
