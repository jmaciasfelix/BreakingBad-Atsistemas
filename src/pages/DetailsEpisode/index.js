import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DetailsEpisode.css';
//react-router
import { Link, useRouteMatch } from 'react-router-dom';
//services
import { getEpisodeById } from 'services/getEpisodeById';
import { Spinner } from 'components/Spinner';
//bootstrap
import { Button } from 'react-bootstrap';

export const DetailsEpisode = () => {
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
  //TODO
  return isLoading ? (
    <Spinner />
  ) : episode?.season ? (
    <>
      <div className="my-5">
        <h1>{`Season ${episode.season} - Episode ${episode.episode}`}</h1>
        <p className="details-episode">
          {`Title: ${episode.title}`}{' '}
          <span>{`📡 ${episode.air_date.replaceAll('-', '/')}`}</span>
        </p>
      </div>
      <div className="my-5">
        <h2 className="mb-4">Lista de personajes</h2>
        {episode?.characters?.map((character) => (
          <Link to={`/character/${character.replace(' ', '-')}`}>
            <Button className="mb-2" variant="primary" size="lg" block>
              {character}
            </Button>
          </Link>
        ))}
      </div>
    </>
  ) : null;
};

DetailsEpisode.propTypes = {};
