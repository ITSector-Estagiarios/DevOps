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
              <Link to="/transfers">Tranfers</Link>
            </li>
            <li>
              <Link to="/iban">IBAN</Link>
            </li>
            <li>
              <Link to="/statements">Monthly Statements</Link>
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