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
import React, { useState } from "react";
import { store, authActions } from '../../_store';
import { useDispatch } from 'react-redux';
import './LoginForm.css';
async function postLogin(url = stryMutAct_9fa48("32") ? "Stryker was here!" : (stryCov_9fa48("32"), ''), data = {}) {
  if (stryMutAct_9fa48("33")) {
    {}
  } else {
    stryCov_9fa48("33");
    console.log(JSON.stringify(data));
    await fetch(url, stryMutAct_9fa48("34") ? {} : (stryCov_9fa48("34"), {
      method: stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), 'POST'),
      headers: stryMutAct_9fa48("36") ? {} : (stryCov_9fa48("36"), {
        "Content-type": stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), "application/json; charset=UTF-8")
      }),
      body: JSON.stringify(data)
    })).then(response => {
      if (stryMutAct_9fa48("38")) {
        {}
      } else {
        stryCov_9fa48("38");
        console.log(response);
        return response.ok;
      }
    }).catch(err => {
      if (stryMutAct_9fa48("39")) {
        {}
      } else {
        stryCov_9fa48("39");
        console.log(err);
        return stryMutAct_9fa48("40") ? true : (stryCov_9fa48("40"), false);
      }
    });
  }
}

//Cria a página de Login
function LoginForm({
  handleLogin
}) {
  if (stryMutAct_9fa48("41")) {
    {}
  } else {
    stryCov_9fa48("41");
    const dispatch = useDispatch();
    const [email, setEmail] = useState(stryMutAct_9fa48("42") ? "Stryker was here!" : (stryCov_9fa48("42"), ""));
    const [password, setPassword] = useState(stryMutAct_9fa48("43") ? "Stryker was here!" : (stryCov_9fa48("43"), ""));
    const [error, setError] = useState(stryMutAct_9fa48("44") ? "Stryker was here!" : (stryCov_9fa48("44"), ""));
    const handleSubmit = event => {
      if (stryMutAct_9fa48("45")) {
        {}
      } else {
        stryCov_9fa48("45");
        event.preventDefault();
        if (stryMutAct_9fa48("47") ? false : stryMutAct_9fa48("46") ? true : (stryCov_9fa48("46", "47"), postLogin(stryMutAct_9fa48("48") ? "" : (stryCov_9fa48("48"), "http://localhost:4000/users/authenticate"), stryMutAct_9fa48("49") ? {} : (stryCov_9fa48("49"), {
          email,
          password
        })))) {
          if (stryMutAct_9fa48("50")) {
            {}
          } else {
            stryCov_9fa48("50");
            handleLogin();
          }
        }
      }
    };
    return <form onSubmit={handleSubmit}>
      <label>
        Emaaaaaaaaaaaaaaaaaaaaaaail:
        <input type="email" value={email} onChange={stryMutAct_9fa48("51") ? () => undefined : (stryCov_9fa48("51"), event => setEmail(event.target.value))} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={stryMutAct_9fa48("52") ? () => undefined : (stryCov_9fa48("52"), event => setPassword(event.target.value))} required />
      </label>
      <br />
      {stryMutAct_9fa48("55") ? error || <div style={{
        color: "red"
      }}>{error}</div> : stryMutAct_9fa48("54") ? false : stryMutAct_9fa48("53") ? true : (stryCov_9fa48("53", "54", "55"), error && <div style={stryMutAct_9fa48("56") ? {} : (stryCov_9fa48("56"), {
        color: stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), "red")
      })}>{error}</div>)}
      <button type="submit">Login</button>
    </form>;
  }
}
export default LoginForm;