import React, { useState } from 'react';
import { Component } from 'react';

function MonthlyStatements() {
  // Define estado inicial para o mês e ano selecionado
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2022');

  // Função para atualizar o mês selecionado
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Função para atualizar o ano selecionado
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="monthly-statements">
      <h1>Monthly Statements</h1>
      <p>Select a month and year to view your statement:</p>
      <div className="form-group">
        <label htmlFor="month">Month:</label>
        <select className="form-control" id="month" value={selectedMonth} onChange={handleMonthChange}>
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
        <label htmlFor="year">Year:</label>
        <select className="form-control" id="year" value={selectedYear} onChange={handleYearChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
      <button className="btn btn-primary">View Statement</button>
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