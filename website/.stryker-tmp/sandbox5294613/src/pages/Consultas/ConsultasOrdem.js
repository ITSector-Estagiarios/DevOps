// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React, { useState, useEffect } from 'react';
import { Component } from 'react';
function MonthlyStatements() {
  if (stryMutAct_9fa48("10")) {
    {}
  } else {
    stryCov_9fa48("10");
    // Define estado inicial para o mês e ano selecionado
    const [selectedMonth, setSelectedMonth] = useState(stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), 'January'));
    const [selectedYear, setSelectedYear] = useState(stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), '2022'));
    const [transactions, setTransactions] = useState(stryMutAct_9fa48("13") ? ["Stryker was here"] : (stryCov_9fa48("13"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("14")) {
        {}
      } else {
        stryCov_9fa48("14");
        fetchTransactions();
      }
    }, stryMutAct_9fa48("15") ? [] : (stryCov_9fa48("15"), [selectedMonth, selectedYear]));
    const fetchTransactions = async () => {
      if (stryMutAct_9fa48("16")) {
        {}
      } else {
        stryCov_9fa48("16");
        // Fazer chamada a uma API ou servidor para obter as transações
        const response = await fetch(stryMutAct_9fa48("17") ? `` : (stryCov_9fa48("17"), `/api/transactions?month=${selectedMonth}&year=${selectedYear}`));
        const data = await response.json();
        setTransactions(data);
      }
    };

    // Função para atualizar o mês selecionado
    const handleMonthChange = event => {
      if (stryMutAct_9fa48("18")) {
        {}
      } else {
        stryCov_9fa48("18");
        setSelectedMonth(event.target.value);
      }
    };

    // Função para atualizar o ano selecionado
    const handleYearChange = event => {
      if (stryMutAct_9fa48("19")) {
        {}
      } else {
        stryCov_9fa48("19");
        setSelectedYear(event.target.value);
      }
    };
    return <div className="monthly-statements">
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
        </select>
      </div>
      <button className="btn btn-primary" onClick={fetchTransactions}>View Statement</button>
      {stryMutAct_9fa48("22") ? transactions.length > 0 || <ul>
          {transactions.map(transaction => <li key={transaction.id}>{transaction.description} - {transaction.amount}</li>)}
        </ul> : stryMutAct_9fa48("21") ? false : stryMutAct_9fa48("20") ? true : (stryCov_9fa48("20", "21", "22"), (stryMutAct_9fa48("25") ? transactions.length <= 0 : stryMutAct_9fa48("24") ? transactions.length >= 0 : stryMutAct_9fa48("23") ? true : (stryCov_9fa48("23", "24", "25"), transactions.length > 0)) && <ul>
          {transactions.map(stryMutAct_9fa48("26") ? () => undefined : (stryCov_9fa48("26"), transaction => <li key={transaction.id}>{transaction.description} - {transaction.amount}</li>))}
        </ul>)}
    </div>;
  }
}
export default MonthlyStatements;
export class Ordem extends Component {
  static displayName = Ordem.name;
  render() {
    if (stryMutAct_9fa48("27")) {
      {}
    } else {
      stryCov_9fa48("27");
      return <div>
        <MonthlyStatements />
      </div>;
    }
  }
}