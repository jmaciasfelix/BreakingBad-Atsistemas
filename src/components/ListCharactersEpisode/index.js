import React from 'react';
import PropTypes from 'prop-types';
import './ListCharactersEpisode.css';
//services
import { getQuoteByAuthor } from 'services/getQuoteByAuthor';
//comonents
import { CharacterRow } from 'components/CharacterRow';

export const ListCharactersEpisode = ({ episode }) => {
  return episode?.characters?.map((character) => (
    <CharacterRow key={character} character={character} />
  ));
};

ListCharactersEpisode.propTypes = {};
