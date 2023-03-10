import './App.css';
import React, { useState } from 'react';
//import ReactDOM from "react-dom";
import LoginPage from './pages/Login/LoginPage';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transferencias from './pages/Transferencias/Transferencias';
import ConsultasIBAN from './pages/Consultas/ConsultasIBAN';
import ConsultasOrdem from './pages/Consultas/ConsultasOrdem';
import NoPage from './NoPage';
import Home from './pages/Home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
        <Route path="home" element={<Home />} />
          <Route path="transferencias" element={<Transferencias />} />
          <Route path="consultarIBAN" element={<ConsultasIBAN />} />
          <Route path="consultarOrdem" element={<ConsultasOrdem />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
