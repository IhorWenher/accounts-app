import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { accountsSelectors, accountsOperations } from '../../redux/accounts';

import PaymentButton from '../PaymentButton';
import Filter from '../Filter';

import Styles from './Table.module.css';

const Table = () => {
  const accounts = useSelector(accountsSelectors.getVisibleAccounts);
  const accountsLength = useSelector(accountsSelectors.getAccountsLength);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountsOperations.fetchAccounts());
  }, [dispatch]);

  const updateAccount = (id, payment) => {
    dispatch(accountsOperations.updateAccount(id, { payment: payment }));
  };

  const getCreatedDate = el => {
    const separeteAr = el.createdAt.split('T').reverse();
    const time = separeteAr[0].split('.')[0];
    const date = separeteAr[1].split('-').reverse().join(':');
    return `${date} в ${time}`;
  };

  const getUpdatedDate = el => {
    const separeteAr = el.updatedAt.split('T').reverse();
    const time = separeteAr[0].split('.')[0];
    const date = separeteAr[1].split('-').reverse().join(':');
    return `${date} в ${time}`;
  };

  return (
    <div className={Styles.container}>
      <h1>Таблица счетов</h1>
      {accountsLength > 1 && <Filter />}
      {accountsLength === 0 && (
        <div>
          <p>Нажмите '+' для добавления счета</p>
        </div>
      )}
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Номер счета</th>
            <th>Компания</th>
            <th>Название игры</th>
            <th>Сумма по счету</th>
            <th> Валюта</th>
            <th>Время и дата выставления</th>
            <th>Время и дата оплаты</th>
          </tr>
        </thead>
        <tbody>
          {accounts &&
            accounts.map(account => {
              const createdDate = getCreatedDate(account);
              const updatedDate = getUpdatedDate(account);
              return (
                <tr key={account._id}>
                  <td>{account.accountNumberFront}</td>
                  <td>{account.company}</td>
                  <td>{account.gameName}</td>
                  <td>{account.sum}</td>
                  <td>{account.currency}</td>
                  <td>{createdDate}</td>
                  <td>
                    {!account.payment ? (
                      <PaymentButton
                        onClick={() =>
                          updateAccount(account._id, !account.payment)
                        }
                      />
                    ) : (
                      updatedDate
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
