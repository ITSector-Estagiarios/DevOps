import React from 'react';
import './HomePage.css';
import LogoutButton from "./LogoutButton";
import { Link } from 'react-router-dom';
import AppRoutes from '../../AppRoutes';



const HomePage = () => {

  const handleLogout = () => {
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              {/*<a href="#">Home</a>*/}
              {/*<Link to="/">Home</Link>*/}
            </li>
            <li>
              <a href="/transferencias">Transferências</a>
              {/*<Link to="/transferencias">Transferências</Link>*/}
            </li>
            <li>
              {/*<a href="#">Consultas</a>*/}
              {/*<Link to="/consultas">Consultas</Link>*/}
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