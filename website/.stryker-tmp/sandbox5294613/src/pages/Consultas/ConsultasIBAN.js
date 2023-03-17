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
import React from 'react';
import './ConsultasIBAN.css';
import { useState } from "react";
function IBAN() {
  if (stryMutAct_9fa48("3")) {
    {}
  } else {
    stryCov_9fa48("3");
    const [iban, setIban] = useState(stryMutAct_9fa48("4") ? "Stryker was here!" : (stryCov_9fa48("4"), ""));
    function handleSubmit(event) {
      if (stryMutAct_9fa48("5")) {
        {}
      } else {
        stryCov_9fa48("5");
        event.preventDefault();

        // Aqui, pode se adicionar a lógica para buscar o IBAN do cliente na base de dados.
        // e definir o valor de "iban" com o resultado da busca

        setIban(stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), "PT50 1234 5678 9012 3456 7890 1"));
      }
    }
    return <div className="container">
      <h1>Your IBAN</h1>
      <form onSubmit={handleSubmit}>
        <button type="IBAN">
          See IBAN
        </button>
      </form>
      {stryMutAct_9fa48("9") ? iban || <p className="success">
          IBAN : {iban}
        </p> : stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8", "9"), iban && <p className="success">
          IBAN : {iban}
        </p>)}
    </div>;
  }
}
export default IBAN;