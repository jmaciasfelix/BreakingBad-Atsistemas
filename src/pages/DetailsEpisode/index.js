import React from 'react';
import './DetailsEpisode.css';
//bootstrap
import { Alert } from 'react-bootstrap';
//hook
import { useTranslation } from 'react-i18next';
import { useEpisodeById } from 'hooks/useEpisodeById';
//components
import { Spinner } from 'components/Spinner';
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
