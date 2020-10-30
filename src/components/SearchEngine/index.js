import React, { useState } from 'react';
import PropTypes from 'prop-types';
//components
import Modal from '../Modal/index';
import { Form } from '../Form';
//hooks
import { useTranslation } from 'react-i18next';

export const SearchEngine = () => {
  const [showModal, setShowModal] = useState(false);
  const [t] = useTranslation('global');
  const handleToggleModal = () => {
    (() => {
      setShowModal(!showModal);
    })();
  };
  return (
    <>
      <p onClick={handleToggleModal}>{t('nav.search')}</p>
      {showModal && (
        <Modal onClose={handleToggleModal}>
          <Form />
        </Modal>
      )}
    </>
  );
};

SearchEngine.propTypes = {};
