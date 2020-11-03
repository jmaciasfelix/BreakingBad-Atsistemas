import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api';
/**
 * Get character by name
 * @param {String} Name Name of character
 */
export function getCharacter(name = 'Walter') {
  return axios
    .get(`${ENDPOINT}/characters?name=${name}`)
    .then((response) => response.data[0]);
}
