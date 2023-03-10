import React, { Component } from 'react';
import './ConsultasIBAN.css';
import { useState } from "react";

function IbanPage() {
  const [iban, setIban] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Aqui, pode se adicionar a lógica para buscar o IBAN do cliente na base de dados.
    // e definir o valor de "iban" com o resultado da busca

    setIban("PT50 1234 5678 9012 3456 7890 1");
  }

  return (
    <div className="container">
      <h1>Seu IBAN</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-primary mb-3">
          Consultar IBAN
        </button>
      </form>
      {iban && (
        <div className="alert alert-success" role="alert">
          Seu IBAN é: {iban}
        </div>
      )}
    </div>
  );
}

export class ConsultasIBAN extends Component {
    static displayName = ConsultasIBAN.name;
  
    render() {
      return (
        <div>
            <IbanPage />
        </div>
      );
    }
  }