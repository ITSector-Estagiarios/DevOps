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
import { fetchWrapper } from '../_helpers';

// create slice

const name = stryMutAct_9fa48("295") ? "" : (stryCov_9fa48("295"), 'users');
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice(stryMutAct_9fa48("296") ? {} : (stryCov_9fa48("296"), {
  name,
  initialState,
  extraReducers
}));

// exports

export const userActions = stryMutAct_9fa48("297") ? {} : (stryCov_9fa48("297"), {
  ...slice.actions,
  ...extraActions
});
export const usersReducer = slice.reducer;

// implementation

function createInitialState() {
  if (stryMutAct_9fa48("298")) {
    {}
  } else {
    stryCov_9fa48("298");
    return stryMutAct_9fa48("299") ? {} : (stryCov_9fa48("299"), {
      users: {}
    });
  }
}
function createExtraActions() {
  if (stryMutAct_9fa48("300")) {
    {}
  } else {
    stryCov_9fa48("300");
    const baseUrl = stryMutAct_9fa48("301") ? `` : (stryCov_9fa48("301"), `${process.env.REACT_APP_API_URL}/users`);
    return stryMutAct_9fa48("302") ? {} : (stryCov_9fa48("302"), {
      getAll: getAll()
    });
    function getAll() {
      if (stryMutAct_9fa48("303")) {
        {}
      } else {
        stryCov_9fa48("303");
        return createAsyncThunk(stryMutAct_9fa48("304") ? `` : (stryCov_9fa48("304"), `${name}/getAll`), stryMutAct_9fa48("305") ? () => undefined : (stryCov_9fa48("305"), async () => await fetchWrapper.get(baseUrl)));
      }
    }
  }
}
function createExtraReducers() {
  if (stryMutAct_9fa48("306")) {
    {}
  } else {
    stryCov_9fa48("306");
    return stryMutAct_9fa48("307") ? {} : (stryCov_9fa48("307"), {
      ...getAll()
    });
    function getAll() {
      if (stryMutAct_9fa48("308")) {
        {}
      } else {
        stryCov_9fa48("308");
        var {
          pending,
          fulfilled,
          rejected
        } = extraActions.getAll;
        return stryMutAct_9fa48("309") ? {} : (stryCov_9fa48("309"), {
          [pending]: state => {
            if (stryMutAct_9fa48("310")) {
              {}
            } else {
              stryCov_9fa48("310");
              state.users = stryMutAct_9fa48("311") ? {} : (stryCov_9fa48("311"), {
                loading: stryMutAct_9fa48("312") ? false : (stryCov_9fa48("312"), true)
              });
            }
          },
          [fulfilled]: (state, action) => {
            if (stryMutAct_9fa48("313")) {
              {}
            } else {
              stryCov_9fa48("313");
              state.users = action.payload;
            }
          },
          [rejected]: (state, action) => {
            if (stryMutAct_9fa48("314")) {
              {}
            } else {
              stryCov_9fa48("314");
              state.users = stryMutAct_9fa48("315") ? {} : (stryCov_9fa48("315"), {
                error: action.error
              });
            }
          }
        });
      }
    }
  }
}