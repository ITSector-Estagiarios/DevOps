import React, { useState } from "react";
import './LoginForm.css';



//Cria a página de Login
function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    const data = {email,password}
    event.preventDefault();
    await fetch("http://localhost:4000/users/authenticate", {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    }).then(response => {
      handleLogin();
      return response.json()
    }).then(
      (result) => {
        console.log("Hello " + result.firstName + " " + result.lastName + "!");
        localStorage.setItem('user', JSON.stringify(result))
      }
    ).catch(err => {
      console.log(err)
      setError(err);
    })
  };

  return (
    <form onSubmit={handleSubmit} class="login-form">
      <label class="email">
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label class="pass">
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <br />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit" class="login">Login</button>
    </form>
  );
}

export default LoginForm;