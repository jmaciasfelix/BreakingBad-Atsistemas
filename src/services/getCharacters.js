import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/characters';

export function getCharacters() {
  return axios.get(`${ENDPOINT}`).then((response) => response.data);
}
