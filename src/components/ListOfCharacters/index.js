import React from 'react';
import './ListOfCharacters.scss';
import PropTypes from 'prop-types';
//components
import { Character } from '../Character';
import { useCharacters } from 'hooks/useCharacters';

export const ListOfCharacters = () => {
  const [loading, characters] = useCharacters();

  return (
    <div className="ListOfCharacters">
      {characters && characters.map((character) => (
        <Character
          key={character.id}
          name={character.name}
          img={character.img}
        />
      ))}
    </div>
  );
};

ListOfCharacters.propTypes = {};
