import React from 'react';
import { useState } from "react";
import './Transferencias.css';


function Transferencias(){
  const fromAccount = "985632014521";
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [balance, setBalance] = useState(100000);
  const [transfers, setTransfers] = useState([
    {
      fromAccount: "985632014521",
      toAccount: "127456214563",
      amount: 500,
      date: "2023-03-03",
    },
    {
      fromAccount: "985632014521",
      toAccount: "847516329548",
      amount: 1000,
      date: "2023-03-02",
    },
  ]);

  const handleTransfer = (event) => {
    event.preventDefault();

    if (toAccount === fromAccount) {
      alert("You cannot transfer money to the same account.");
      return;
    }

    if ( !toAccount || !amount) {
      alert("Please fill in all fields");
      return;
    }

    const transferAmount = parseInt(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Please enter a valid transfer amount");
      return;
    }

    if (transferAmount > balance) {
      alert("You don't have enough balance for this transfer");
    } else {
      const date = new Date().toISOString().slice(0, 10);
      const newTransfer = {
        fromAccount,
        toAccount,
        amount: transferAmount,
        date,
      };
      setTransfers([...transfers, newTransfer]);
      setBalance(balance - transferAmount);
      setShowSuccessMessage(true);
      resetForm();
    }
  };

  const resetForm = () => {
    
    setToAccount("");
    setAmount("");
  };

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9]*$/;
    if (!regex.test(keyValue)) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <h1 class="title">Bank Transfer Page</h1>
      <p class="balance">Current Balance: {balance}</p>
      <form onSubmit={handleTransfer} class="interface">
        <label htmlFor="fromAccount" class="from">From Account:</label>
        <input
          type="text"
          id="fromAccount"
          name="fromAccount"
          value={985632014521}
          onKeyPress={handleKeyPress}
          minLength={12}
          maxLength={12}
        />
        <br />
        <br />

        <label htmlFor="toAccount" class="to">To Account:</label>
        <input
          type="text"
          id="toAccount"
          name="toAccount"
          value={toAccount}
          onChange={(event) => setToAccount(event.target.value)}
          onKeyPress={handleKeyPress}
          minLength={12}
          maxLength={12}
        />
        <br />
        <br />

        <label htmlFor="amount" class="money">Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          onKeyPress={handleKeyPress}
          maxLength={6}
        />
        <br />
        <br />

        <button type="submit" class="transferir"><h3>Transfer</h3></button>
      </form>
      {showSuccessMessage && (
        <>
          <p class="successful">Transfer successful! Check your account balance.</p>
        </>
      )}
        <h2 class="history">Transfer History</h2>
        <ul className="transfer-history">
          {transfers.map((transfer, index) => (
            <li key={index}>
              <p>From Account: {transfer.fromAccount}</p>
              <p>To Account: {transfer.toAccount}</p>
              <p>Amount: {transfer.amount}</p>
              <p>Date: {transfer.date}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}



export default Transferencias;