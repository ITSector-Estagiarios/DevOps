import React from 'react';
import './ConsultasIBAN.css';
import { useState } from "react";

function IBAN() {
  const [iban, setIban] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Aqui, pode se adicionar a lógica para buscar o IBAN do cliente na base de dados.
    // e definir o valor de "iban" com o resultado da busca

    setIban("PT50 1234 5678 9012 3456 7890 1");
  }

  return (
    <div className="container">
      <h1>Your IBAN</h1>
      <form onSubmit={handleSubmit}>
        <button type="IBAN">
          See IBAN
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