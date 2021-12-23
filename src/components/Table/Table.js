import accounts from '../../accounts.json';

const Table = () => {
  accounts.map(account => {
    return console.log(account);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Номер счета</th>
            <th>Компания</th>
            <th>Название игры</th>
            <th>Сумма по счету</th>
            <th>Валюта</th>
            <th>Время и дата выставления</th>
            <th>Время и дата оплаты</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => {
            return (
              <tr key={account.id}>
                <td>{account.number}</td>
                <td>{account.company}</td>
                <td>{account.gameName}</td>
                <td>{account.sum}</td>
                <td>{account.currency}</td>
                <td>{account.exposureTime}</td>
                <td>{account.paymentTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
