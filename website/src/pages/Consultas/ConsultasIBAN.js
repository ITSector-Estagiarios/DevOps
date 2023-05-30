import React from 'react';
import './ConsultasIBAN.css';
import { useState } from "react";

function IBAN() {
  const [iban, setIban] = useState("");
  const [error, setError] = useState(Error());

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = localStorage.getItem('user');
    const token = JSON.parse(user).Token;
    const data = { token };
    await fetch('http://localhost:4001/iban', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.status === 401) {
          localStorage.removeItem('user');
          window.location.pathname = '/';
        }
        else if (!response.ok) {
          throw Error("There was an error");  
        }
        return response.json();
      }).then(responsedata =>{
        setError("")
        setIban(responsedata.iban);
      }).catch(error => {
        setIban("");
        setError(error);
      });
    
    // Aqui, pode se adicionar a lógica para buscar o IBAN do cliente na base de dados.
    // e definir o valor de "iban" com o resultado da busca
  }

  return (
    <div className="IBAN">
      <h1 className="check">Your IBAN</h1>
      <form onSubmit={handleSubmit} className="form">
        <button type="IBAN" className="see">
          IBAN
        </button>
      </form>
      {
        error && (
          <p>
            {error.message}
          </p>
        )
      }
      {iban && (
        <p className="success">
          IBAN : {iban}
        </p>
      )}
    </div>
  );
}

export default IBAN;