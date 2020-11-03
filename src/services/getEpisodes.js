import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/episodes';

/**
 * Get episodes of breaking bad
 */
export function getEpisodes() {
  return axios.get(`${ENDPOINT}`).then((response) => response.data);
}
