import { useEffect, useState } from 'react';
//react-router
import { useRouteMatch } from 'react-router-dom';
//services
import { getEpisodeById } from 'services/getEpisodeById';

export function useEpisodeById() {
  const { url } = useRouteMatch();
  const [episode, setEpisode] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

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
      response ? setEpisode(response) : setError(true);
    });
  }, [url]);

  return [episode, isLoading, isError];
}
