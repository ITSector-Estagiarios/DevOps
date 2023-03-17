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
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { history, fetchWrapper } from '../_helpers';

// create slice

const name = stryMutAct_9fa48("260") ? "" : (stryCov_9fa48("260"), 'auth');
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice(stryMutAct_9fa48("261") ? {} : (stryCov_9fa48("261"), {
  name,
  initialState,
  reducers,
  extraReducers
}));

// exports

export const authActions = stryMutAct_9fa48("262") ? {} : (stryCov_9fa48("262"), {
  ...slice.actions,
  ...extraActions
});
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  if (stryMutAct_9fa48("263")) {
    {}
  } else {
    stryCov_9fa48("263");
    return stryMutAct_9fa48("264") ? {} : (stryCov_9fa48("264"), {
      // initialize state from local storage to enable user to stay logged in
      user: JSON.parse(localStorage.getItem(stryMutAct_9fa48("265") ? "" : (stryCov_9fa48("265"), 'user'))),
      error: null
    });
  }
}
function createReducers() {
  if (stryMutAct_9fa48("266")) {
    {}
  } else {
    stryCov_9fa48("266");
    return stryMutAct_9fa48("267") ? {} : (stryCov_9fa48("267"), {
      logout
    });
    function logout(state) {
      if (stryMutAct_9fa48("268")) {
        {}
      } else {
        stryCov_9fa48("268");
        state.user = null;
        localStorage.removeItem(stryMutAct_9fa48("269") ? "" : (stryCov_9fa48("269"), 'user'));
        history.navigate(stryMutAct_9fa48("270") ? "" : (stryCov_9fa48("270"), '/login'));
      }
    }
  }
}
function createExtraActions() {
  if (stryMutAct_9fa48("271")) {
    {}
  } else {
    stryCov_9fa48("271");
    const baseUrl = stryMutAct_9fa48("272") ? `` : (stryCov_9fa48("272"), `http://localhost:4000/users`);
    return stryMutAct_9fa48("273") ? {} : (stryCov_9fa48("273"), {
      login: login()
    });
    function login() {
      if (stryMutAct_9fa48("274")) {
        {}
      } else {
        stryCov_9fa48("274");
        return createAsyncThunk(stryMutAct_9fa48("275") ? `` : (stryCov_9fa48("275"), `${name}/login`), stryMutAct_9fa48("276") ? () => undefined : (stryCov_9fa48("276"), async ({
          email,
          password
        }) => await fetchWrapper.post(stryMutAct_9fa48("277") ? `` : (stryCov_9fa48("277"), `${baseUrl}/authenticate`), stryMutAct_9fa48("278") ? {} : (stryCov_9fa48("278"), {
          email,
          password
        }))));
      }
    }
  }
}
function createExtraReducers() {
  if (stryMutAct_9fa48("279")) {
    {}
  } else {
    stryCov_9fa48("279");
    return stryMutAct_9fa48("280") ? {} : (stryCov_9fa48("280"), {
      ...login()
    });
    function login() {
      if (stryMutAct_9fa48("281")) {
        {}
      } else {
        stryCov_9fa48("281");
        var {
          pending,
          fulfilled,
          rejected
        } = extraActions.login;
        return stryMutAct_9fa48("282") ? {} : (stryCov_9fa48("282"), {
          [pending]: state => {
            if (stryMutAct_9fa48("283")) {
              {}
            } else {
              stryCov_9fa48("283");
              state.error = null;
            }
          },
          [fulfilled]: (state, action) => {
            if (stryMutAct_9fa48("284")) {
              {}
            } else {
              stryCov_9fa48("284");
              const user = action.payload;
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem(stryMutAct_9fa48("285") ? "" : (stryCov_9fa48("285"), 'user'), JSON.stringify(user));
              state.user = user;

              // get return url from location state or default to home page
              const {
                from
              } = stryMutAct_9fa48("288") ? history.location.state && {
                from: {
                  pathname: '/'
                }
              } : stryMutAct_9fa48("287") ? false : stryMutAct_9fa48("286") ? true : (stryCov_9fa48("286", "287", "288"), history.location.state || (stryMutAct_9fa48("289") ? {} : (stryCov_9fa48("289"), {
                from: stryMutAct_9fa48("290") ? {} : (stryCov_9fa48("290"), {
                  pathname: stryMutAct_9fa48("291") ? "" : (stryCov_9fa48("291"), '/')
                })
              })));
              history.navigate(from);
            }
          },
          [rejected]: (state, action) => {
            if (stryMutAct_9fa48("292")) {
              {}
            } else {
              stryCov_9fa48("292");
              state.error = action.error;
            }
          }
        });
      }
    }
  }
}