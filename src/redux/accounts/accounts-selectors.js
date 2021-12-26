import { createSelector } from '@reduxjs/toolkit';

const getAccounts = state => state.accounts.items;
const getFilter = state => state.accounts.filter;
const getLoading = state => state.accounts.loading;
const getAccountsLength = state => state.accounts.items.length;

const getVisibleAccounts = createSelector(
  [getAccounts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(({ company }) =>
      company.toLowerCase().includes(normalizedFilter),
    );
  },
);

const accountsReducers = {
  getAccounts,
  getFilter,
  getLoading,
  getAccountsLength,
  getVisibleAccounts,
};

export default accountsReducers;
