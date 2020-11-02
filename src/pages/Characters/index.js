import React from 'react';
import './Characters.css';
import PropTypes from 'prop-types';
//hooks
import { useTranslation } from 'react-i18next';
import { ListOfCharacters } from 'components/ListOfCharacters';

export const CharactersPage = () => {
  const [t] = useTranslation('global');
  return (
    <div className="min-height container-characters py-5">
      <h1 className="py-5">{t('charactersPage.title')}</h1>
      <ListOfCharacters />
    </div>
  );
};

CharactersPage.propTypes = {};
