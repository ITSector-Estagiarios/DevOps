import React, { useState } from "react";
import './LoginForm.css';



//Cria a página de Login
function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    const data = { email, password }
    event.preventDefault();
    await fetch("http://localhost:4000/users/authenticate", {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        throw new Error("Wrong credentials");  
      }
      return response.json();
    }).then(responsedata =>{
      handleLogin();
      localStorage.setItem('user', JSON.stringify(responsedata))
      console.log(JSON.stringify(responsedata))
    }).catch(error => {
      setError(error);
    });
    
  };
  if (!error) {
    return (
      <form onSubmit={handleSubmit} className="login-form">
        <label className="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label className="pass">
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="login">Login</button>
      </form>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label className="email">
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label className="pass">
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <br />
      <div style={{ color: "red" }}>Incorrect email or password!</div>
      <button type="submit" className="login">Login</button>
    </form>
  );
}

export default LoginForm;