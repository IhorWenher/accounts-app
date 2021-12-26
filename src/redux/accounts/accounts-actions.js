import { createAction } from '@reduxjs/toolkit';

export const fetchAccountsRequest = createAction(
  'accounts/fetchAccountsRequest',
);
export const fetchAccountsSuccess = createAction(
  'accounts/fetchAccountsSuccess',
);
export const fetchAccountsError = createAction('accounts/fetchAccountsError');

export const addAccountRequest = createAction('accounts/addAccountRequest');
export const addAccountSuccess = createAction('accounts/addAccountSuccess');
export const addAccountError = createAction('accounts/addAccountError');

export const updateAccountRequest = createAction(
  'accounts/updateAccountRequest',
);
export const updateAccountSuccess = createAction(
  'accounts/updateAccountSuccess',
);
export const updateAccountError = createAction('accounts/updateAccountError');

export const filterAccounts = createAction('accounts/filterAccounts');
