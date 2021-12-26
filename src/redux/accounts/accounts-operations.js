import axios from 'axios';

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
} from './accounts-actions';

axios.defaults.baseURL = 'https://accounts-bar-backend.herokuapp.com';

const fetchAccounts = () => async dispatch => {
  dispatch(fetchAccountsRequest());

  try {
    const { data } = await axios.get('/accounts');
    dispatch(fetchAccountsSuccess(data));
  } catch (error) {
    dispatch(fetchAccountsError(error));
  }
};

const addAccount = account => async dispatch => {
  dispatch(addAccountRequest());

  try {
    const { data } = await axios.post('/accounts', account);
    dispatch(addAccountSuccess(data));
  } catch (error) {
    dispatch(addAccountError(error));
  }
};

const updateAccount = (id, payment) => async dispatch => {
  dispatch(updateAccountRequest());

  try {
    const { data } = await axios.patch(`/accounts/${id}`, payment);
    dispatch(updateAccountSuccess(data));
  } catch (error) {
    dispatch(updateAccountError(error));
  }
};

const operations = {
  fetchAccounts,
  addAccount,
  updateAccount,
};

export default operations;
