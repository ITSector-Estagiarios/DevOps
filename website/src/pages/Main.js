import React from 'react';
import './Main.css';
import LogoutButton from "./Home/LogoutButton";
import { Outlet, Link } from "react-router-dom";

const Main = () => {

  const handleLogout = () => {
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/transferencias">Transferências</Link>
            </li>
            <li>
              <Link to="/consultarIBAN">ConsultarIBAN</Link>
            </li>
            <li>
              <Link to="/consultarOrdem">ConsultarOrdem</Link>
            </li>
          </ul>
        </nav>
        <LogoutButton onLogout={handleLogout} redirectPath="/" />
      </header>
      <Outlet />
    </div>
  );
};

export default Main;