import React from 'react';
import './ListOfCharacters.css';
//components
import { Character } from '../Character';
import { Spinner } from 'components/Spinner';
//hooks
import { useCharacters } from 'hooks/useCharacters';

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
            key={character.char_id}
            name={character.name}
            img={character.img}
          />
        ))
      )}
    </div>
  );
};
