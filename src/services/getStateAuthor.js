import { getCharacter } from './getCharacter';

/**
 * Get status author
 * @param {String} author
 */
export function getStateAuthor(author) {
  return getCharacter(author).then((response) => response?.status);
}
