import Styles from './PaymentButton.module.css';

const PaymentButton = ({ onClick }) => {
  return (
    <div>
      <button type="button" className={Styles.btn} onClick={onClick}>
        Оплатить
      </button>
    </div>
  );
};

export default PaymentButton;
