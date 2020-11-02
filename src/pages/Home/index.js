import React from 'react';
import './Home.css';
//react-router-dom
import { Link } from 'react-router-dom';
//hooks
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const [t] = useTranslation('global');
  return (
    <div className="min-height container-home">
      <Link to={`seasons`}>
        <h2>{t('home.seasons')}</h2>
      </Link>
      <Link to={`characters`}>
        <h2>{t('home.character')}</h2>
      </Link>
      <Link to={`killers`}>
        <h2>{t('home.killer')}</h2>
      </Link>
    </div>
  );
};
