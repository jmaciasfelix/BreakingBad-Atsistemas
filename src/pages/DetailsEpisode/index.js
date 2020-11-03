import React from 'react';
import './DetailsEpisode.css';
//services
import { Spinner } from 'components/Spinner';
//bootstrap
import { Alert } from 'react-bootstrap';
//i18n
import { useTranslation } from 'react-i18next';
//hook
import { useEpisodeById } from 'hooks/useEpisodeById';
import { Episode } from 'components/Episode';

export const DetailsEpisode = () => {
  const [t] = useTranslation('global');
  const [episode, isLoading, isError] = useEpisodeById();

  return (
    <div className="py-5 min-height">
      {isLoading ? (
        <Spinner />
      ) : !isError && episode ? (
        <Episode episode={episode} />
      ) : (
        <Alert variant="danger">{t('detailsEpisodePage.error')}</Alert>
      )}
    </div>
  );
};
