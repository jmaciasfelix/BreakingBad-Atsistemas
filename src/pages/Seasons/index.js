import React from 'react';
//styles
import './Seasons.css';
//hooks
import { useTranslation } from 'react-i18next';
//components
import  ListOfSeasons  from 'components/ListOfSeasons';

export const SeasonsPage = () => {
  const [t] = useTranslation('global');
  return (
    <div className="min-height container-characters">
      <h1 className="my-5">{t('seasonsPage.title')}</h1>
      <ListOfSeasons />
    </div>
  );
};
