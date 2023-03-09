import React, { useState } from "react";
import './LoginForm.css';

//Cria a página de Login

function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "user@example.com" && password === "password") {
      handleLogin();
    } else {
      setError("Email ou senha inválidos!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <br />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;