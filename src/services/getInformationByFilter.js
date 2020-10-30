//i18n
import i18next from 'i18next';
//services
import { getCharacter } from './getCharacter';

/**
 * According to the filter, different endpoint will be called
 * @param {string} payload data url
 * @param {string} filter silter of search
 */
export function getInformationByFilter(payload, filter) {
  const lng = i18next.language;
  const FILTER = i18next.store.data[lng].global['search-engine'].filter;
  if (filter === FILTER.CHARACTER) {
    console.log('Call API Character');
    return getCharacter(payload, filter);
  } else if (filter === FILTER.EPISODE) {
    console.log('Call API Episode');
  } else if (filter === FILTER.QUOTE) {
    console.log('Call API Quote');
  } else if (filter === FILTER.KILLER) {
    console.log('Call API Killer');
  }
}
