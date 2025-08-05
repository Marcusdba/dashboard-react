import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dashboard React
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/configurações">
                Configurações
              </Link>
            </li>
          </ul>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
