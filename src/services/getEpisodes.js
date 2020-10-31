import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/episodes';

export function getEpisodes() {
  return axios.get(`${ENDPOINT}`).then((response) => response.data);
}
