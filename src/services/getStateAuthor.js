import axios from 'axios';
import { getCharacter } from './getCharacter';

export function getStateAuthor(author) {
  return getCharacter(author).then((response) => response?.status);
}
