import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/characters?limit=20&offset=0';

export function getCharacters() {
  return axios.get(`${ENDPOINT}`).then((response) => response.data);
}
