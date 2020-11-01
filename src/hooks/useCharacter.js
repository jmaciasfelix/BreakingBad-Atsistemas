import { useEffect, useState } from 'react';
import { getCharacter } from '../services/getCharacter';

export function useCharacter(name) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState({});

  useEffect(
    function () {
      setLoading(true);
      getCharacter(name).then((characters) => {
        setCharacter(characters);
        setLoading(false);
      });
    },
    [setCharacter, name]
  );

  return [loading, character];
}
