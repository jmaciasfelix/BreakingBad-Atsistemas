import React from 'react';
import PropTypes from 'prop-types';
import './ListCharactersEpisode.css';
//components
import { CharacterRow } from 'components/CharacterRow';

export const ListCharactersEpisode = ({ episode }) => {
  return episode?.characters?.map((character) => (
    <CharacterRow key={character} character={character} />
  ));
};

ListCharactersEpisode.propTypes = {
  episode: PropTypes.shape({
    air_date: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    episode: PropTypes.string.isRequired,
    season: PropTypes.string.isRequired,
    series: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
