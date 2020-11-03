import React from 'react';
import './Four0Four.css';
//react-router
import { Link } from 'react-router-dom';
//i18n
import { useTranslation } from 'react-i18next';

export const Four0Four = () => {
  const [t] = useTranslation('global');
  return (
    <div class="min-height py-5 error">
      <h1>{t('NotFound.title')}</h1>
      <Link to="/">
        <h2>{t('NotFound.redirect')}</h2>
      </Link>
    </div>
  );
};

Four0Four.propTypes = {};
