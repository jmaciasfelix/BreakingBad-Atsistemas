import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/episodes';

/**
 * Get episode by id
 * @param {number} id
 */
export function getEpisodeById(id) {
  return axios.get(`${ENDPOINT}/${id}`).then((response) => response.data[0]);
}
