import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === "admin" && senha === "123") {
      navigate("/dashboard");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="text-center">
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "auto" }}>
        <input
          type="text"
          placeholder="Usuário"
          className="form-control mb-2"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="form-control mb-2"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
