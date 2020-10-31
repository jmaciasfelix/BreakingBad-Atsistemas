import { useEffect, useState } from 'react';
import { getEpisodes } from '../services/getEpisodes';

export function useSeasons() {
  const [loading, setLoading] = useState(false);
  const [seasons, setSeasons] = useState();

  const groupEpisodesBySeason = (episodes) => {
    const length = episodes.length;
    const lastSeason = episodes[length - 1].season;
    const episodesBySeasons = [];

    for (let numSeason = 0; numSeason < lastSeason; numSeason++) {
      episodesBySeasons.push([]);
    }

    episodes.forEach((episode) => {
      episodesBySeasons[episode.season - 1]?.push(episode);
    });

    return episodesBySeasons
  };

  useEffect(
    function () {
      setLoading(true);
      getEpisodes().then((responseSeasons) => {
        setSeasons(groupEpisodesBySeason(responseSeasons));
        setLoading(false);
      });
    },
    [setSeasons]
  );

  return [loading, seasons];
}
