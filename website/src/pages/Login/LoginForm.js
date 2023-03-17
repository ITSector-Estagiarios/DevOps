import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './LoginForm.css';


async function postLogin(url = '', data= {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then(json => {
    console.log(json)
    return true;
  }).catch(err => {
    console.log(err)
    return false;
  })
}

//Cria a página de Login
function LoginForm({ handleLogin }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postLogin("http://localhost:4000/users/authenticate",{email,password})) {
      handleLogin();
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