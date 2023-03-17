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
import { useState } from "react";
import './Transferencias.css';
function Transferencias() {
  if (stryMutAct_9fa48("63")) {
    {}
  } else {
    stryCov_9fa48("63");
    const fromAccount = stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), "985632014521");
    const [toAccount, setToAccount] = useState(stryMutAct_9fa48("65") ? "Stryker was here!" : (stryCov_9fa48("65"), ""));
    const [amount, setAmount] = useState(stryMutAct_9fa48("66") ? "Stryker was here!" : (stryCov_9fa48("66"), ""));
    const [showSuccessMessage, setShowSuccessMessage] = useState(stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67"), false));
    const [balance, setBalance] = useState(100000);
    const [transfers, setTransfers] = useState(stryMutAct_9fa48("68") ? [] : (stryCov_9fa48("68"), [stryMutAct_9fa48("69") ? {} : (stryCov_9fa48("69"), {
      fromAccount: stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), "985632014521"),
      toAccount: stryMutAct_9fa48("71") ? "" : (stryCov_9fa48("71"), "127456214563"),
      amount: 500,
      date: stryMutAct_9fa48("72") ? "" : (stryCov_9fa48("72"), "2023-03-03")
    }), stryMutAct_9fa48("73") ? {} : (stryCov_9fa48("73"), {
      fromAccount: stryMutAct_9fa48("74") ? "" : (stryCov_9fa48("74"), "985632014521"),
      toAccount: stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), "847516329548"),
      amount: 1000,
      date: stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), "2023-03-02")
    })]));
    const handleTransfer = event => {
      if (stryMutAct_9fa48("77")) {
        {}
      } else {
        stryCov_9fa48("77");
        event.preventDefault();
        if (stryMutAct_9fa48("80") ? toAccount !== fromAccount : stryMutAct_9fa48("79") ? false : stryMutAct_9fa48("78") ? true : (stryCov_9fa48("78", "79", "80"), toAccount === fromAccount)) {
          if (stryMutAct_9fa48("81")) {
            {}
          } else {
            stryCov_9fa48("81");
            alert(stryMutAct_9fa48("82") ? "" : (stryCov_9fa48("82"), "You cannot transfer money to the same account."));
            return;
          }
        }
        if (stryMutAct_9fa48("85") ? !toAccount && !amount : stryMutAct_9fa48("84") ? false : stryMutAct_9fa48("83") ? true : (stryCov_9fa48("83", "84", "85"), (stryMutAct_9fa48("86") ? toAccount : (stryCov_9fa48("86"), !toAccount)) || (stryMutAct_9fa48("87") ? amount : (stryCov_9fa48("87"), !amount)))) {
          if (stryMutAct_9fa48("88")) {
            {}
          } else {
            stryCov_9fa48("88");
            alert(stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), "Please fill in all fields"));
            return;
          }
        }
        const transferAmount = parseInt(amount);
        if (stryMutAct_9fa48("92") ? isNaN(transferAmount) && transferAmount <= 0 : stryMutAct_9fa48("91") ? false : stryMutAct_9fa48("90") ? true : (stryCov_9fa48("90", "91", "92"), isNaN(transferAmount) || (stryMutAct_9fa48("95") ? transferAmount > 0 : stryMutAct_9fa48("94") ? transferAmount < 0 : stryMutAct_9fa48("93") ? false : (stryCov_9fa48("93", "94", "95"), transferAmount <= 0)))) {
          if (stryMutAct_9fa48("96")) {
            {}
          } else {
            stryCov_9fa48("96");
            alert(stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), "Please enter a valid transfer amount"));
            return;
          }
        }
        if (stryMutAct_9fa48("101") ? transferAmount <= balance : stryMutAct_9fa48("100") ? transferAmount >= balance : stryMutAct_9fa48("99") ? false : stryMutAct_9fa48("98") ? true : (stryCov_9fa48("98", "99", "100", "101"), transferAmount > balance)) {
          if (stryMutAct_9fa48("102")) {
            {}
          } else {
            stryCov_9fa48("102");
            alert(stryMutAct_9fa48("103") ? "" : (stryCov_9fa48("103"), "You don't have enough balance for this transfer"));
          }
        } else {
          if (stryMutAct_9fa48("104")) {
            {}
          } else {
            stryCov_9fa48("104");
            const date = stryMutAct_9fa48("105") ? new Date().toISOString() : (stryCov_9fa48("105"), new Date().toISOString().slice(0, 10));
            const newTransfer = stryMutAct_9fa48("106") ? {} : (stryCov_9fa48("106"), {
              fromAccount,
              toAccount,
              amount: transferAmount,
              date
            });
            setTransfers(stryMutAct_9fa48("107") ? [] : (stryCov_9fa48("107"), [...transfers, newTransfer]));
            setBalance(stryMutAct_9fa48("108") ? balance + transferAmount : (stryCov_9fa48("108"), balance - transferAmount));
            setShowSuccessMessage(stryMutAct_9fa48("109") ? false : (stryCov_9fa48("109"), true));
            resetForm();
          }
        }
      }
    };
    const resetForm = () => {
      if (stryMutAct_9fa48("110")) {
        {}
      } else {
        stryCov_9fa48("110");
        setToAccount(stryMutAct_9fa48("111") ? "Stryker was here!" : (stryCov_9fa48("111"), ""));
        setAmount(stryMutAct_9fa48("112") ? "Stryker was here!" : (stryCov_9fa48("112"), ""));
      }
    };
    const handleKeyPress = event => {
      if (stryMutAct_9fa48("113")) {
        {}
      } else {
        stryCov_9fa48("113");
        const keyCode = stryMutAct_9fa48("116") ? event.keyCode && event.which : stryMutAct_9fa48("115") ? false : stryMutAct_9fa48("114") ? true : (stryCov_9fa48("114", "115", "116"), event.keyCode || event.which);
        const keyValue = String.fromCharCode(keyCode);
        const regex = stryMutAct_9fa48("120") ? /^[^0-9]*$/ : stryMutAct_9fa48("119") ? /^[0-9]$/ : stryMutAct_9fa48("118") ? /^[0-9]*/ : stryMutAct_9fa48("117") ? /[0-9]*$/ : (stryCov_9fa48("117", "118", "119", "120"), /^[0-9]*$/);
        if (stryMutAct_9fa48("123") ? false : stryMutAct_9fa48("122") ? true : stryMutAct_9fa48("121") ? regex.test(keyValue) : (stryCov_9fa48("121", "122", "123"), !regex.test(keyValue))) {
          if (stryMutAct_9fa48("124")) {
            {}
          } else {
            stryCov_9fa48("124");
            event.preventDefault();
          }
        }
      }
    };
    return <div>
      <h1>Bank Transfer Page</h1>
      <p class="balance">Current Balance: {balance}</p>
      <form onSubmit={handleTransfer}>
        <label htmlFor="fromAccount">From Account:</label>
        <input type="text" id="fromAccount" name="fromAccount" value={985632014521} onKeyPress={handleKeyPress} minLength={12} maxLength={12} />
        <br />
        <br />

        <label htmlFor="toAccount">To Account:</label>
        <input type="text" id="toAccount" name="toAccount" value={toAccount} onChange={stryMutAct_9fa48("125") ? () => undefined : (stryCov_9fa48("125"), event => setToAccount(event.target.value))} onKeyPress={handleKeyPress} minLength={12} maxLength={12} />
        <br />
        <br />

        <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" name="amount" value={amount} onChange={stryMutAct_9fa48("126") ? () => undefined : (stryCov_9fa48("126"), event => setAmount(event.target.value))} onKeyPress={handleKeyPress} maxLength={6} />
        <br />
        <br />

        <button type="submit"><h3>Transfer</h3></button>
      </form>
      {stryMutAct_9fa48("129") ? showSuccessMessage || <>
          <p class="successful">Transfer successful! Check your account balance.</p>
        </> : stryMutAct_9fa48("128") ? false : stryMutAct_9fa48("127") ? true : (stryCov_9fa48("127", "128", "129"), showSuccessMessage && <>
          <p class="successful">Transfer successful! Check your account balance.</p>
        </>)}
        <h2>Transfer History</h2>
        <ul className="transfer-history">
          {transfers.map(stryMutAct_9fa48("130") ? () => undefined : (stryCov_9fa48("130"), (transfer, index) => <li key={index}>
              <p>From Account: {transfer.fromAccount}</p>
              <p>To Account: {transfer.toAccount}</p>
              <p>Amount: {transfer.amount}</p>
              <p>Date: {transfer.date}</p>
            </li>))}
      </ul>
    </div>;
  }
}
export default Transferencias;