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
export { fakeBackend };
function fakeBackend() {
  if (stryMutAct_9fa48("138")) {
    {}
  } else {
    stryCov_9fa48("138");
    let users = stryMutAct_9fa48("139") ? [] : (stryCov_9fa48("139"), [stryMutAct_9fa48("140") ? {} : (stryCov_9fa48("140"), {
      id: 1,
      username: stryMutAct_9fa48("141") ? "" : (stryCov_9fa48("141"), 'test'),
      password: stryMutAct_9fa48("142") ? "" : (stryCov_9fa48("142"), 'test'),
      firstName: stryMutAct_9fa48("143") ? "" : (stryCov_9fa48("143"), 'Test'),
      lastName: stryMutAct_9fa48("144") ? "" : (stryCov_9fa48("144"), 'User')
    })]);
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
      if (stryMutAct_9fa48("145")) {
        {}
      } else {
        stryCov_9fa48("145");
        return new Promise((resolve, reject) => {
          if (stryMutAct_9fa48("146")) {
            {}
          } else {
            stryCov_9fa48("146");
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);
            function handleRoute() {
              if (stryMutAct_9fa48("147")) {
                {}
              } else {
                stryCov_9fa48("147");
                switch (stryMutAct_9fa48("148") ? false : (stryCov_9fa48("148"), true)) {
                  case stryMutAct_9fa48("152") ? url.endsWith('/users/authenticate') || opts.method === 'POST' : stryMutAct_9fa48("151") ? false : stryMutAct_9fa48("150") ? true : (stryCov_9fa48("150", "151", "152"), (stryMutAct_9fa48("153") ? url.startsWith('/users/authenticate') : (stryCov_9fa48("153"), url.endsWith(stryMutAct_9fa48("154") ? "" : (stryCov_9fa48("154"), '/users/authenticate')))) && (stryMutAct_9fa48("156") ? opts.method !== 'POST' : stryMutAct_9fa48("155") ? true : (stryCov_9fa48("155", "156"), opts.method === (stryMutAct_9fa48("157") ? "" : (stryCov_9fa48("157"), 'POST'))))):
                    if (stryMutAct_9fa48("149")) {} else {
                      stryCov_9fa48("149");
                      return authenticate();
                    }
                  case stryMutAct_9fa48("161") ? url.endsWith('/users') || opts.method === 'GET' : stryMutAct_9fa48("160") ? false : stryMutAct_9fa48("159") ? true : (stryCov_9fa48("159", "160", "161"), (stryMutAct_9fa48("162") ? url.startsWith('/users') : (stryCov_9fa48("162"), url.endsWith(stryMutAct_9fa48("163") ? "" : (stryCov_9fa48("163"), '/users')))) && (stryMutAct_9fa48("165") ? opts.method !== 'GET' : stryMutAct_9fa48("164") ? true : (stryCov_9fa48("164", "165"), opts.method === (stryMutAct_9fa48("166") ? "" : (stryCov_9fa48("166"), 'GET'))))):
                    if (stryMutAct_9fa48("158")) {} else {
                      stryCov_9fa48("158");
                      return getUsers();
                    }
                  default:
                    if (stryMutAct_9fa48("167")) {} else {
                      stryCov_9fa48("167");
                      // pass through any requests not handled above
                      return realFetch(url, opts).then(stryMutAct_9fa48("168") ? () => undefined : (stryCov_9fa48("168"), response => resolve(response))).catch(stryMutAct_9fa48("169") ? () => undefined : (stryCov_9fa48("169"), error => reject(error)));
                    }
                }
              }
            }

            // route functions

            function authenticate() {
              if (stryMutAct_9fa48("170")) {
                {}
              } else {
                stryCov_9fa48("170");
                const {
                  username,
                  password
                } = body();
                const user = users.find(stryMutAct_9fa48("171") ? () => undefined : (stryCov_9fa48("171"), x => stryMutAct_9fa48("174") ? x.username === username || x.password === password : stryMutAct_9fa48("173") ? false : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173", "174"), (stryMutAct_9fa48("176") ? x.username !== username : stryMutAct_9fa48("175") ? true : (stryCov_9fa48("175", "176"), x.username === username)) && (stryMutAct_9fa48("178") ? x.password !== password : stryMutAct_9fa48("177") ? true : (stryCov_9fa48("177", "178"), x.password === password)))));
                if (stryMutAct_9fa48("181") ? false : stryMutAct_9fa48("180") ? true : stryMutAct_9fa48("179") ? user : (stryCov_9fa48("179", "180", "181"), !user)) return error(stryMutAct_9fa48("182") ? "" : (stryCov_9fa48("182"), 'Username or password is incorrect'));
                return ok(stryMutAct_9fa48("183") ? {} : (stryCov_9fa48("183"), {
                  id: user.id,
                  username: user.username,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  token: stryMutAct_9fa48("184") ? "" : (stryCov_9fa48("184"), 'fake-jwt-token')
                }));
              }
            }
            function getUsers() {
              if (stryMutAct_9fa48("185")) {
                {}
              } else {
                stryCov_9fa48("185");
                if (stryMutAct_9fa48("188") ? false : stryMutAct_9fa48("187") ? true : stryMutAct_9fa48("186") ? isAuthenticated() : (stryCov_9fa48("186", "187", "188"), !isAuthenticated())) return unauthorized();
                return ok(users);
              }
            }

            // helper functions

            function ok(body) {
              if (stryMutAct_9fa48("189")) {
                {}
              } else {
                stryCov_9fa48("189");
                resolve(stryMutAct_9fa48("190") ? {} : (stryCov_9fa48("190"), {
                  ok: stryMutAct_9fa48("191") ? false : (stryCov_9fa48("191"), true),
                  text: stryMutAct_9fa48("192") ? () => undefined : (stryCov_9fa48("192"), () => Promise.resolve(JSON.stringify(body)))
                }));
              }
            }
            function unauthorized() {
              if (stryMutAct_9fa48("193")) {
                {}
              } else {
                stryCov_9fa48("193");
                resolve(stryMutAct_9fa48("194") ? {} : (stryCov_9fa48("194"), {
                  status: 401,
                  text: stryMutAct_9fa48("195") ? () => undefined : (stryCov_9fa48("195"), () => Promise.resolve(JSON.stringify(stryMutAct_9fa48("196") ? {} : (stryCov_9fa48("196"), {
                    message: stryMutAct_9fa48("197") ? "" : (stryCov_9fa48("197"), 'Unauthorized')
                  }))))
                }));
              }
            }
            function error(message) {
              if (stryMutAct_9fa48("198")) {
                {}
              } else {
                stryCov_9fa48("198");
                resolve(stryMutAct_9fa48("199") ? {} : (stryCov_9fa48("199"), {
                  status: 400,
                  text: stryMutAct_9fa48("200") ? () => undefined : (stryCov_9fa48("200"), () => Promise.resolve(JSON.stringify(stryMutAct_9fa48("201") ? {} : (stryCov_9fa48("201"), {
                    message
                  }))))
                }));
              }
            }
            function isAuthenticated() {
              if (stryMutAct_9fa48("202")) {
                {}
              } else {
                stryCov_9fa48("202");
                return stryMutAct_9fa48("205") ? opts.headers['Authorization'] !== 'Bearer fake-jwt-token' : stryMutAct_9fa48("204") ? false : stryMutAct_9fa48("203") ? true : (stryCov_9fa48("203", "204", "205"), opts.headers[stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), 'Authorization')] === (stryMutAct_9fa48("207") ? "" : (stryCov_9fa48("207"), 'Bearer fake-jwt-token')));
              }
            }
            function body() {
              if (stryMutAct_9fa48("208")) {
                {}
              } else {
                stryCov_9fa48("208");
                return stryMutAct_9fa48("211") ? opts.body || JSON.parse(opts.body) : stryMutAct_9fa48("210") ? false : stryMutAct_9fa48("209") ? true : (stryCov_9fa48("209", "210", "211"), opts.body && JSON.parse(opts.body));
              }
            }
          }
        });
      }
    };
  }
}