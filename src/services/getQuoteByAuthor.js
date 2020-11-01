import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/quote?author=';

export function getQuoteByAuthor(author) {
  return axios.get(`${ENDPOINT}${author}`).then((response) => response.data);
}
