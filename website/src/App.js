//import './App.css';
import React from 'react';
import LoginPage from './pages/Login/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transferencias from './pages/Transferencias/Transferencias';
import ConsultasIBAN from './pages/Consultas/ConsultasIBAN';
import ConsultasOrdem from './pages/Consultas/ConsultasOrdem';
import NoPage from './NoPage';
import Home from './pages/Home/Home';

function App() {
  /*const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };*/

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="transfers" element={<Transferencias />} />
          <Route path="iban" element={<ConsultasIBAN />} />
          <Route path="statements" element={<ConsultasOrdem />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
