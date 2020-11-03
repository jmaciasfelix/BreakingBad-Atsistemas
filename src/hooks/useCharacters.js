import { useEffect, useState } from 'react';
//services
import { getCharacters } from '../services/getCharacters';

/**
 * Hooks to get characters
 */
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
