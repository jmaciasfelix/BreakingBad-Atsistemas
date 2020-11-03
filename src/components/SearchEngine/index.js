import React, { useState } from 'react';
import PropTypes from 'prop-types';
//components
import { Form } from '../Form';
import { ResultSearch } from 'components/SearchEngine/ResultSearch';
//hooks
import { useTranslation } from 'react-i18next';
//redux
import { useSelector } from 'react-redux';
//bootstrap
import { Button, Modal, Alert } from 'react-bootstrap';

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
      <Modal
        show={showModal}
        onHide={handleToggleModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="py-3">
          <Form />
        </Modal.Header>
        <Modal.Body className="py-2">
          {!storeSearch?.loading &&
            (storeSearch.lastSearch.response ? (
              <ResultSearch
                onHide={handleToggleModal}
                response={storeSearch.lastSearch.response}
                filter={storeSearch.lastSearch.filter}
              />
            ) : (
              <Alert variant="danger">{t('search-engine.error')}</Alert>
            ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

SearchEngine.propTypes = {};
