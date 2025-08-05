import React, { useEffect, useState } from "react";

function Configurações() {
  const [cidade, setCidade] = useState(
    localStorage.getItem("cidade") || "Brasília"
  );

  useEffect(() => {
    localStorage.setItem("cidade", cidade);
  }, [cidade]);

  return (
    <div>
      <h2>Configurações</h2>
      <div className="form-group mt-3" style={{ maxWidth: "400px" }}>
        <label htmlFor="cidade">Cidade para previsão do tempo:</label>
        <input
          type="text"
          id="cidade"
          className="form-control"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <small className="form-text text-muted">
          Essa cidade será usada no Card de Clima do Dashboard.
        </small>
      </div>
    </div>
  );
}

export default Configurações;
