import React from 'react';
import './Seasons.css';
import PropTypes from 'prop-types';
//hooks
import { useTranslation } from 'react-i18next';
//bootstrap
import {} from 'react-bootstrap';
import { ListOfSeasons } from 'components/ListOfSeasons';

export const SeasonsPage = () => {
  const [t] = useTranslation('global');
  return (
    <div className="container-characters">
      <h1 className="my-5">{t('seasonsPage.title')}</h1>
      <ListOfSeasons />
    </div>
  );
};

SeasonsPage.propTypes = {};
