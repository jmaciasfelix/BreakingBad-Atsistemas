//i18n
import i18next from 'i18next';

const ENDPOINT_BASE = 'https://www.breakingbadapi.com/api/';

export function getEndpointByFilter(filter, value) {
  const lng = i18next.language;
  const FILTER = i18next.store.data[lng].global['search-engine'].filter;
  console.log(FILTER)
  if (filter === FILTER.CHARACTER) {
    return `${ENDPOINT_BASE}characters?name=${value.replaceAll(' ', '+')}`;
  } else if (filter === FILTER.EPISODE) {
    return `${ENDPOINT_BASE}episodes?series=${value.replaceAll(' ', '+')}`;
  } else if (filter === FILTER.QUOTE) {
    return `${ENDPOINT_BASE}quote?author=${value.replaceAll(' ', '+')}`;
  } else if (filter === FILTER.KILLER) {
    return `${ENDPOINT_BASE}death-count?name=${value.replaceAll(' ', '+')}`;
  }
}
