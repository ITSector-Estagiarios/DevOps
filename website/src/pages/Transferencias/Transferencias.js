import React, { useState } from 'react';
import './Transferencias.css';

function Transferencias() {
    const fromAccount = "985632014521";
    const [toAccount, setToAccount] = useState("");
    const [amount, setAmount] = useState("");
    const [code, setCode] = useState("");
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [balance, setBalance] = useState(100000);
  
    const handleTransfer = (event) => {
      event.preventDefault();
  
      if (toAccount === fromAccount) {
        alert("You cannot transfer money to the same account.");
        return;
      }
  
      if (!toAccount || !amount) {
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
        return;
      }
  
      setShowCodeInput(true);
    };
  
    const performTransfer = () => {
      const user = localStorage.getItem("user");
      const token = JSON.parse(user).Token;
      const newTransfer = {
        amount,
        fromAccount,
        toAccount,
        token
      };
    
      // Perform the transfer
      fetch("http://localhost:4002/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTransfer)
      })
        .then((response) => {
          if (response.status === 401) {
            localStorage.removeItem('user');
            window.location.pathname = '/';
          }
          else if (response.ok) setShowCodeInput(true);
          else throw new Error(response.statusText);
    
        })
        .catch((error) => {
          console.log(error.message);
        });
       
    };


    const handleConfirmTransfer = (event) => {
      event.preventDefault();
      const user = localStorage.getItem("user");
      const token = JSON.parse(user).Token;
      const data = { code , token };
      fetch("http://localhost:4002/transfer_confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            setShowSuccessMessage(false);
            throw new Error(response.statusText);
          }
        }).then((responsedata) => {
          const newbalance = responsedata.balance;
          setBalance(newbalance);
          setShowSuccessMessage(true);
          resetForm();
        }

        ).catch((error) => {
          console.log(error.message);
          alert("Token invalid!");
        });
    };
  
    const resetForm = () => {
      setToAccount("");
      setAmount("");
      setCode("");
      setShowCodeInput(false);
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
        <h1 className="title">Bank Transfer Page</h1>
        <p className="balance">Current Balance: {balance}</p>
        <form onSubmit={handleTransfer} className="interface">
          <label htmlFor="fromAccount" className="from">From Account:</label>
          <input
            type="text"
            id="fromAccount"
            name="fromAccount"
            value={fromAccount}
            readOnly
            minLength={12}
            maxLength={12}
          />
          <br />
          <br />
  
          <label htmlFor="toAccount" className="to">To Account:</label>
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

        <label htmlFor="amount" className="money">Amount:</label>
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
        {showCodeInput ? (
          <>
            <label htmlFor="code" className="code">Code:</label>
            <input
              type="text"
              id="code"
              name="code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="confirm-transfer" onClick={handleConfirmTransfer}>
              <h3>Confirm Transfer</h3>
            </button>
          </>
        ) : (
          <button type="submit" className="transferir" onClick={performTransfer}>
            <h3>Transfer</h3>
          </button>
        )}

      </form>
      {showSuccessMessage && (
        <>
          <p className="successful">Transfer successful! Check your account balance.</p>
        </>
      )}
    </div>
  );
}

export default Transferencias;