import React from 'react';
//react-router-dom
import { Link } from 'react-router-dom';
//hooks
import { useTranslation } from 'react-i18next';

import { Button } from 'react-bootstrap';

export const HomePage = () => {
  const [t] = useTranslation('global');
  return (
    <>
      <section className="container-home">
        <Link to={`temporadas`}>
          <h2>{t('home.seasons')}</h2>
        </Link>
        <Link to={`personajes`}>
          <h2>{t('home.character')}</h2>
        </Link>
        <Link to={`asesinos`}>
          <h2>{t('home.killer')}</h2>
        </Link>
      </section>
    </>
  );
};
