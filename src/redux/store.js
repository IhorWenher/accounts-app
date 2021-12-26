import { configureStore } from '@reduxjs/toolkit';
import { accountsReducers } from './accounts';

export const store = configureStore({
  reducer: {
    accounts: accountsReducers,
  },
});
