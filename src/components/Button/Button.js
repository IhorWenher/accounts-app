import { ReactSVG } from 'react-svg';
import svgPlus from '../../images/plus-icon.svg';

import Styles from '../Button/Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button
        type="button"
        className={Styles.btn} /* onClick={openAddTransaction} */
        onClick={onClick}
      >
        <ReactSVG className={Styles.svgComponent} src={svgPlus} />
      </button>
    </div>
  );
};

export default Button;
