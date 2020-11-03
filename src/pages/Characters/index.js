import React from 'react';
import './Characters.css';
//hooks
import { useTranslation } from 'react-i18next';
//components
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
