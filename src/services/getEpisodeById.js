import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/episodes';

export function getEpisodeById(id) {
  return axios.get(`${ENDPOINT}/${id}`).then((response) => response.data[0]);
}
