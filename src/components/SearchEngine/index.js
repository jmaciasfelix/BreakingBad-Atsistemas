import React, { useState } from 'react';
import PropTypes from 'prop-types';
//components
import { Form } from '../Form';
import { ResultSearch } from 'components/ResultSearch';
//hooks
import { useTranslation } from 'react-i18next';
//redux
import { useSelector } from 'react-redux';
//bootstrap
import { Button, Modal } from 'react-bootstrap';

export const SearchEngine = () => {
  const [showModal, setShowModal] = useState(false);
  const [t] = useTranslation('global');

  const storeSearch = useSelector((state) => state.searchReducer);
  const handleToggleModal = () => {
    (() => {
      setShowModal(!showModal);
    })();
  };

  return (
    <>
      <Button onClick={handleToggleModal} variant="light">
        {t('nav.search')}
      </Button>
      <Modal show={showModal} onHide={handleToggleModal}>
        <Modal.Header closeButton>
          <Form />
        </Modal.Header>
        <Modal.Body>
          {!storeSearch?.loading && (
            <ResultSearch info={storeSearch.lastSearch} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

SearchEngine.propTypes = {};
