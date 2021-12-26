import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsError,
  addAccountRequest,
  addAccountSuccess,
  addAccountError,
  updateAccountRequest,
  updateAccountSuccess,
  updateAccountError,
  filterAccounts,
} from './accounts-actions';

const items = createReducer([], {
  [fetchAccountsSuccess]: (_, { payload }) => payload,
  [addAccountSuccess]: (state, { payload }) => [...state, payload],
  [updateAccountSuccess]: (state, { payload }) => {
    state.find((el, idx) => {
      if (el._id === payload._id) {
        state.splice(idx, 1, payload);
      }
    });
  },
});

const loading = createReducer(false, {
  [fetchAccountsRequest]: () => true,
  [fetchAccountsSuccess]: () => false,
  [fetchAccountsError]: () => false,

  [addAccountRequest]: () => true,
  [addAccountSuccess]: () => false,
  [addAccountError]: () => false,

  [updateAccountRequest]: () => true,
  [updateAccountSuccess]: () => false,
  [updateAccountError]: () => false,
});

const error = createReducer(null, {
  [fetchAccountsError]: (_, { payload }) => payload,
  [fetchAccountsSuccess]: () => null,

  [addAccountError]: (_, { payload }) => payload,
  [addAccountSuccess]: () => null,

  [updateAccountError]: (_, { payload }) => payload,
  [updateAccountSuccess]: () => null,
});

const filter = createReducer('', {
  [filterAccounts]: (_, { payload }) => payload,
});

const accountsReducers = combineReducers({
  items,
  loading,
  error,
  filter,
});

export default accountsReducers;
