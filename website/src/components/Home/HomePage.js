import React from 'react';
import './HomePage.css';
import LogoutButton from "./LogoutButton";


const HomePage = () => {

  const handleLogout = () => {
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Transferências</a>
            </li>
            <li>
              <a href="#">Consultas</a>
            </li>
          </ul>
        </nav>
        <LogoutButton onLogout={handleLogout} />
      </header>
      <main>
        <h1>Bem-vindo à HomePage!</h1>
        <p>Conteúdo da página principal.</p>
      </main>
    </div>
  );
};

export default HomePage;