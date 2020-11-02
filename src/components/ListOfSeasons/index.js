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
//hooks
import { useTranslation } from 'react-i18next';
//HOC
import {withSeasons} from "HOC/withSeasons"

 const ListOfSeasons = ({loading, seasons}) => {
  const [t] = useTranslation('global');
  const { url } = useRouteMatch();

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
                  {`${t("seasonsPage.season")} ${season[0].season}`}
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

export default withSeasons(ListOfSeasons)
