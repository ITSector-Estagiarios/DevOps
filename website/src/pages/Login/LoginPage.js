import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Main from "../Main";
import Transferencias from "../Transferencias/Transferencias";
import IBAN from "../../pages/Consultas/ConsultasIBAN";
import Ordem from "../../pages/Consultas/ConsultasOrdem";

//É o handler do login correto ou errado 

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Main />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default LoginPage;