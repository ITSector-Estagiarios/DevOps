import React, { useState } from "react";
import { store, authActions } from '../../_store';
import { useDispatch } from 'react-redux';
import './LoginForm.css';


async function postLogin(url = '', data= {}) {
  console.log(JSON.stringify(data))
  await fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then(response => {
    console.log(response)
    return response.ok
  }).catch(err => {
    console.log(err)
    return false
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