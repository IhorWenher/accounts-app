import { useSelector, useDispatch } from 'react-redux';
import { accountsSelectors } from '../../redux/accounts';
import { filterAccounts } from '../../redux/accounts';

import Styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(accountsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className={Styles.container}>
      <p className={Styles.label}>Фильтр по компании</p>
      <input
        type="text"
        className={Styles.input}
        value={value}
        onChange={e => dispatch(filterAccounts(e.target.value))}
      />
    </div>
  );
};

export default Filter;
