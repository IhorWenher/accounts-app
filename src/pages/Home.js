import { useState } from 'react';

import Table from '../components/Table';
import Button from '../components/Button';
import Backdrop from '../components/Backdrop';
import AccountModal from '../components/AccountModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Table />
      <Button onClick={toggleModal} />
      {showModal && (
        <Backdrop>
          <AccountModal togleModal={toggleModal} />
        </Backdrop>
      )}
    </>
  );
};

export default Home;
