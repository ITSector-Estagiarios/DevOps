import React, { useState } from "react";
import LoginForm from "./LoginForm";
import HomePage from "../Home/HomePage";

//É o handler do login correto ou errado 

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default LoginPage;