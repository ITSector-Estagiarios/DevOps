import React from 'react';
import './ConsultasIBAN.css';
import { useState } from "react";

function IBAN() {
  const [iban, setIban] = useState("");
  const [error, setError] = useState("");

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = localStorage.getItem('user');
    const Id = (JSON.parse(user).id).toString();
    const data = { Id };
    await fetch('http://localhost:4001/iban', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        if (!response.ok) {
          throw new Error("There was an error");  
        }
        return response.json();
      }).then(responsedata =>{
        console.log(JSON.stringify(responsedata))
        setIban(responsedata.iban);
      }).catch(error => {
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
      {iban && (
        <p className="success">
          IBAN : {iban}
        </p>
      )}
    </div>
  );
}

export default IBAN;