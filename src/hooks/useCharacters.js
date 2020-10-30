import { useEffect, useState } from 'react';
import { getCharacters } from '../services/getCharacters';

export function useCharacters() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState();

  useEffect(
    function () {
      setLoading(true);
      getCharacters().then((characters) => {
        setCharacters(characters);
        setLoading(false);
      });
    },
    [setCharacters]
  );

  return [loading, characters];
}
