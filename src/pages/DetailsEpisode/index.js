import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DetailsEpisode.css';
//react-router
import { Link, useRouteMatch } from 'react-router-dom';
//services
import { getEpisodeById } from 'services/getEpisodeById';
import { Spinner } from 'components/Spinner';
//bootstrap
import { Button, Col, Row } from 'react-bootstrap';
import { ListCharactersEpisode } from 'components/ListCharactersEpisode';
//i18n
import { useTranslation } from 'react-i18next';

export const DetailsEpisode = () => {
  const [t] = useTranslation('global');
  const [episode, setEpisode] = useState({});
  const [isLoading, setLoading] = useState(false);

  const { url } = useRouteMatch();

  const getIdEpisodeByUrl = (url) => {
    const splitUrl = url.split('/');
    const idEpisode = splitUrl[splitUrl.length - 1];
    return idEpisode;
  };

  useEffect(() => {
    const idEpisode = getIdEpisodeByUrl(url);
    setLoading(true);
    getEpisodeById(idEpisode).then((response) => {
      setLoading(false);
      setEpisode(response);
    });
  }, [url]);

  return isLoading ? (
    <Spinner />
  ) : episode?.season ? (
    <>
      <div className="my-5">
        <h1>{`${t('detailsEpisodePage.season')} ${episode.season} - ${t(
          'detailsEpisodePage.episode'
        )}  ${episode.episode}`}</h1>
        <p className="details-episode">
          {`${t('detailsEpisodePage.title')} : ${episode.title}`}{' '}
          <span>{`📡 ${episode.air_date.replaceAll('-', '/')}`}</span>
        </p>
      </div>
      <div className="my-5">
        <h2 className="mb-4">{t('detailsEpisodePage.table.title')} </h2>
        <Row className="heading-table">
          <Col>{t('detailsEpisodePage.table.name')} </Col>
          <Col xs={6}>{t('detailsEpisodePage.table.quote')} </Col>
          <Col>{t('detailsEpisodePage.table.status')} </Col>
        </Row>
        <ListCharactersEpisode episode={episode} />
      </div>
    </>
  ) : null;
};

DetailsEpisode.propTypes = {};
