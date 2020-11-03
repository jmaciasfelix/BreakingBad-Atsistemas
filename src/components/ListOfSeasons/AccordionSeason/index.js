import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import { Accordion, Card, Button } from 'react-bootstrap';
//react-router
import { Link } from 'react-router-dom';
//hooks
import { useTranslation } from 'react-i18next';

export const AccordionSeason = ({ url, season }) => {
  const [t] = useTranslation('global');
  
  const builderListEpisode = (episodes) => {
    return (
      <Card.Body>
        {episodes.map((episode) => (
          <Link
            to={`${url}/${episode.season}/episode/${episode.episode_id}`}
            key={episode.episode_id}
            className="season-link"
          >
            {episode.title}
          </Link>
        ))}
      </Card.Body>
    );
  };

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={season[0].season}
        >
          {`${t('seasonsPage.season')} ${season[0].season}`}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={season[0].season}>
        {builderListEpisode(season)}
      </Accordion.Collapse>
    </Card>
  );
};

AccordionSeason.propTypes = {
  url: PropTypes.string.isRequired,
  season: PropTypes.array.isRequired,
};
