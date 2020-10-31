import React from 'react';
import './ListOfCharacters.css';
import PropTypes from 'prop-types';
//components
import { Character } from '../Character';
import { useCharacters } from 'hooks/useCharacters';
import { Spinner } from 'components/Spinner';

export const ListOfCharacters = () => {
  const [loading, characters] = useCharacters();

  return (
    <div className="ListOfCharacters">
      {loading ? (
        <Spinner />
      ) : (
        characters &&
        characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            img={character.img}
          />
        ))
      )}
    </div>
  );
};

ListOfCharacters.propTypes = {};
