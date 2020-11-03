import axios from 'axios';

const ENDPOINT = 'https://www.breakingbadapi.com/api/quote?author=';

/**
 * Get all quotes by author
 * @param {String} author
 */
export function getQuoteByAuthor(author) {
  return axios.get(`${ENDPOINT}${author}`).then((response) => response.data);
}
