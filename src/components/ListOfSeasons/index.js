import React from 'react';
import PropTypes from 'prop-types';
import './ListOfSeasons.css';
//components
import { Spinner } from 'components/Spinner';
//hooks
import { useSeasons } from 'hooks/useSeasons';
//bootstrap
import { Accordion, Card, Button } from 'react-bootstrap';
//react-router
import { Link, useRouteMatch } from 'react-router-dom';

export const ListOfSeasons = () => {
  const [loading, seasons] = useSeasons();
  const { url } = useRouteMatch();
  console.log(url);

  const builderListEpisode = (episodes) => {
    return (
      <Card.Body>
        {episodes.map((episode) => (
          <Link
            to={`${url}/${episode.episode_id}`}
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
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Accordion defaultActiveKey="0">
          {seasons?.map((season) => (
            <Card key={season[0].season}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={season[0].season}
                >
                  {`Temporada ${season[0].season}`}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={season[0].season}>
                {builderListEpisode(season)}
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      )}
    </>
  );
};

ListOfSeasons.propTypes = {};
