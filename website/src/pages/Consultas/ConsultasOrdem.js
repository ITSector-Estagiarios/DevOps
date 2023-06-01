import React, { useState } from 'react';
import './ConsultasOrdem.css';
import { Component } from 'react';

function MonthlyStatements() {
  // Define estado inicial para o mês e ano selecionado
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2022");
  const [transactions, setTransactions] = useState([]);


  const fetchTransactions = async () => {
    // Fazer chamada a uma API ou servidor para obter as transações
    const user = localStorage.getItem('user');
    const token = JSON.parse(user).Token;
    const data = { Token: token , month , year};
    await fetch('http://localhost:4001/extract', {
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
      return response.json()
    }).then(responsedata => {
      var extracts = responsedata.extracts;
      setTransactions(extracts);
    }).catch(error => {
      console.log(error.message)
    });
  };

  // Função para atualizar o mês selecionado
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  // Função para atualizar o ano selecionado
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="monthly-statements">
      <h1>Monthly Statements</h1>
      <p>Select a month and year to view your statement:</p>
      <div className="form-group">
        <label htmlFor="month" className="select-label">Month:</label>
        <select className="select-group" id="month" value={month} onChange={handleMonthChange}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="year" className="select-label">Year:</label>
        <select className="select-group" id="year" value={year} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={fetchTransactions}>View Statement</button>
      {transactions.length > 0 && (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>From Account</th>
              <th>To Account</th>
              <th>Value</th>
              <th>Date</th>
              <th>Account remaining</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}>
                <td>{item.fromAccount}</td>
                <td>{item.toAccount}</td>
                <td>{item.value}</td>
                <td>{item.date}</td>
                <td>{item.accountRemaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MonthlyStatements;


export class Ordem extends Component {
  static displayName = Ordem.name;

  render() {
    return (
      <div>
        <MonthlyStatements />
      </div>
    );
  }
}