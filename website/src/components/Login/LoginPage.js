import React, { useState } from "react";
import LoginForm from "./LoginForm";
import HomePage from "../Home/HomePage";
import Transferencias from "../Transferencias/Transferencias";

//É o handler do login correto ou errado 

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        //<HomePage />
        <Transferencias />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default LoginPage;