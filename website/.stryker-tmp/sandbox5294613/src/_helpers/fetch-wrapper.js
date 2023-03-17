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
import { store, authActions } from '../_store';
export const fetchWrapper = stryMutAct_9fa48("212") ? {} : (stryCov_9fa48("212"), {
  get: request(stryMutAct_9fa48("213") ? "" : (stryCov_9fa48("213"), 'GET')),
  post: request(stryMutAct_9fa48("214") ? "" : (stryCov_9fa48("214"), 'POST')),
  put: request(stryMutAct_9fa48("215") ? "" : (stryCov_9fa48("215"), 'PUT')),
  delete: request(stryMutAct_9fa48("216") ? "" : (stryCov_9fa48("216"), 'DELETE'))
});
function request(method) {
  if (stryMutAct_9fa48("217")) {
    {}
  } else {
    stryCov_9fa48("217");
    return (url, body) => {
      if (stryMutAct_9fa48("218")) {
        {}
      } else {
        stryCov_9fa48("218");
        const requestOptions = stryMutAct_9fa48("219") ? {} : (stryCov_9fa48("219"), {
          method,
          headers: authHeader(url)
        });
        if (stryMutAct_9fa48("221") ? false : stryMutAct_9fa48("220") ? true : (stryCov_9fa48("220", "221"), body)) {
          if (stryMutAct_9fa48("222")) {
            {}
          } else {
            stryCov_9fa48("222");
            requestOptions.headers[stryMutAct_9fa48("223") ? "" : (stryCov_9fa48("223"), 'Content-Type')] = stryMutAct_9fa48("224") ? "" : (stryCov_9fa48("224"), 'application/json');
            requestOptions.body = JSON.stringify(body);
          }
        }
        return fetch(url, requestOptions).then(handleResponse);
      }
    };
  }
}

// helper functions

function authHeader(url) {
  if (stryMutAct_9fa48("225")) {
    {}
  } else {
    stryCov_9fa48("225");
    // return auth header with jwt if user is logged in and request is to the api url
    const token = authToken();
    const isLoggedIn = stryMutAct_9fa48("226") ? !token : (stryCov_9fa48("226"), !(stryMutAct_9fa48("227") ? token : (stryCov_9fa48("227"), !token)));
    const isApiUrl = stryMutAct_9fa48("228") ? url.endsWith("http://localhost:4000") : (stryCov_9fa48("228"), url.startsWith(stryMutAct_9fa48("229") ? "" : (stryCov_9fa48("229"), "http://localhost:4000")));
    if (stryMutAct_9fa48("232") ? isLoggedIn || isApiUrl : stryMutAct_9fa48("231") ? false : stryMutAct_9fa48("230") ? true : (stryCov_9fa48("230", "231", "232"), isLoggedIn && isApiUrl)) {
      if (stryMutAct_9fa48("233")) {
        {}
      } else {
        stryCov_9fa48("233");
        return stryMutAct_9fa48("234") ? {} : (stryCov_9fa48("234"), {
          Authorization: stryMutAct_9fa48("235") ? `` : (stryCov_9fa48("235"), `Bearer ${token}`)
        });
      }
    } else {
      if (stryMutAct_9fa48("236")) {
        {}
      } else {
        stryCov_9fa48("236");
        return {};
      }
    }
  }
}
function authToken() {
  if (stryMutAct_9fa48("237")) {
    {}
  } else {
    stryCov_9fa48("237");
    return stryMutAct_9fa48("238") ? store.getState().auth.user.token : (stryCov_9fa48("238"), store.getState().auth.user?.token);
  }
}
function handleResponse(response) {
  if (stryMutAct_9fa48("239")) {
    {}
  } else {
    stryCov_9fa48("239");
    return response.text().then(text => {
      if (stryMutAct_9fa48("240")) {
        {}
      } else {
        stryCov_9fa48("240");
        const data = stryMutAct_9fa48("243") ? text || JSON.parse(text) : stryMutAct_9fa48("242") ? false : stryMutAct_9fa48("241") ? true : (stryCov_9fa48("241", "242", "243"), text && JSON.parse(text));
        if (stryMutAct_9fa48("246") ? false : stryMutAct_9fa48("245") ? true : stryMutAct_9fa48("244") ? response.ok : (stryCov_9fa48("244", "245", "246"), !response.ok)) {
          if (stryMutAct_9fa48("247")) {
            {}
          } else {
            stryCov_9fa48("247");
            if (stryMutAct_9fa48("250") ? [401, 403].includes(response.status) || authToken() : stryMutAct_9fa48("249") ? false : stryMutAct_9fa48("248") ? true : (stryCov_9fa48("248", "249", "250"), (stryMutAct_9fa48("251") ? [] : (stryCov_9fa48("251"), [401, 403])).includes(response.status) && authToken())) {
              if (stryMutAct_9fa48("252")) {
                {}
              } else {
                stryCov_9fa48("252");
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                const logout = stryMutAct_9fa48("253") ? () => undefined : (stryCov_9fa48("253"), (() => {
                  const logout = () => store.dispatch(authActions.logout());
                  return logout;
                })());
                logout();
              }
            }
            const error = stryMutAct_9fa48("256") ? data && data.message && response.statusText : stryMutAct_9fa48("255") ? false : stryMutAct_9fa48("254") ? true : (stryCov_9fa48("254", "255", "256"), (stryMutAct_9fa48("258") ? data || data.message : stryMutAct_9fa48("257") ? false : (stryCov_9fa48("257", "258"), data && data.message)) || response.statusText);
            return Promise.reject(error);
          }
        }
        return data;
      }
    });
  }
}