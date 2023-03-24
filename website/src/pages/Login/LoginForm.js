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
    await fetch("http://localhost:5000/users/authenticate", {
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
    }).then(data =>{
      handleLogin();
      console.log("Hello " + data.firstName + " " + data.lastName + "!");
      localStorage.setItem('user', JSON.stringify(data))
    }).catch(error => {
      setError(error);
    });
    
  };
  if (!error) {
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
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
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
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <br />
      <div style={{ color: "red" }}>Wrong credentials!</div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;