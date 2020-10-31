import React from 'react';
import './Characters.css';
import PropTypes from 'prop-types';
//hooks
import { useTranslation } from 'react-i18next';
import { ListOfCharacters } from 'components/ListOfCharacters';

export const CharactersPage = () => {
  const [t] = useTranslation('global');
  return (
    <div className="container-characters">
      <h1 className="my-5">{t('charactersPage.title')}</h1>
      <ListOfCharacters />
    </div>
  );
};

CharactersPage.propTypes = {};
