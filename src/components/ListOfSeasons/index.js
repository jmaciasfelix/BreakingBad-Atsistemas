import React from 'react';
import PropTypes from 'prop-types';
import './ListOfSeasons.css';
//components
import { Spinner } from 'components/Spinner';
import { AccordionSeason } from './AccordionSeason';
//bootstrap
import { Accordion, Alert } from 'react-bootstrap';
//hooks
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//HOC
import { withSeasons } from 'HOC/withSeasons';

const ListOfSeasons = ({ loading, seasons }) => {
  const [t] = useTranslation('global');
  const { url } = useRouteMatch();
  seasons = [];
  return (
    <>
      {loading ? (
        <Spinner />
      ) : seasons.length !== 0 ? (
        <Accordion defaultActiveKey="0">
          {seasons?.map((season) => (
            <AccordionSeason key={season[0].season} url={url} season={season} />
          ))}
        </Accordion>
      ) : (
        <Alert variant="danger">{t('seasonsPage.error')}</Alert>
      )}
    </>
  );
};

export default withSeasons(ListOfSeasons);
