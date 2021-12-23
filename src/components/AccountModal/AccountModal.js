import { useState } from 'react';
import Styles from './Account.module.css';

const AccountModal = ({ onSubmit, onCancel }) => {
  const [company, setCompany] = useState('Компания 1');
  const [gameName, setGameName] = useState('');
  const [sum, setSum] = useState('');
  const [currency, setCurrency] = useState('Euro');

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'company':
        setCompany(value);
        break;

      case 'gameName':
        setGameName(value);
        break;

      case 'sum':
        setSum(value);
        break;

      case 'currency':
        setCurrency(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const account = {
      company: company,
      gameName: gameName,
      sum: sum,
      currency: currency,
    };

    onSubmit();

    console.log(account);
  };

  return (
    <form className={Styles.form} action="" onSubmit={handleSubmit}>
      <select name="company" onChange={handleChange}>
        <option value="Компания 1" selected>
          Компания 1
        </option>
        <option value="Компания 2">Компания 2</option>
        <option value="Компания 3">Компания 3</option>
      </select>
      <input
        name="gameName"
        type="text"
        placeholder="Введите название игры"
        onChange={handleChange}
      />
      <input
        name="sum"
        type="number"
        placeholder="Введите сумму оплаты"
        onChange={handleChange}
      />
      <select name="currency" onChange={handleChange}>
        <option value="Euro" selected>
          Euro
        </option>
        <option value="Dollar">Dollar</option>
      </select>

      <input type="submit" value="Добавить" className={Styles.btn} />
      <button type="button" className={Styles.btn} onClick={onCancel}>
        Отмена
      </button>
    </form>
  );
};

export default AccountModal;
