import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api';

export function getCharacter(name = 'Walter') {
  return axios
    .get(`${ENDPOINT}/characters?name=${name}`)
    .then((response) => response.data[0]);
}
