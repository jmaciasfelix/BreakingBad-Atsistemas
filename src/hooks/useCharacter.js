import { useEffect, useState } from 'react';
//react-router
import { useRouteMatch } from 'react-router-dom';
//services
import { getQuoteByAuthor } from 'services/getQuoteByAuthor';
import { getCharacter } from '../services/getCharacter';

/**
 * Hook to get character and quotes
 */
export function useCharacter() {
  const { url } = useRouteMatch();
  const [isLoading, setLoading] = useState(false);
  const [character, setCharacter] = useState();
  const [isError, setError] = useState(false);
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    if (!isError && character === undefined) {
      const name = url.split('/').pop().replaceAll('-', ' ');
      setLoading(true);
      getCharacter(name)
        .then((characters) => {
          if (characters) {
            setCharacter(characters);
            getQuoteByAuthor(characters.name.replaceAll(' ', '+')).then(
              (response) => {
                setQuotes(response);
                setLoading(false);
              }
            );
          } else {
            setError(true);
            setLoading(false);
          }
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [setCharacter, character, url, isError]);

  return [isLoading, character, isError, quotes];
}
