/*
 * action Search
 */

const MODULE_ID = '@SEARCH';

const SEARCH_LOADING = `${MODULE_ID}/SEARCH_LOADING`;
const SEARCH_RESPONSE = `${MODULE_ID}/SEARCH_RESPONSE`;
const SEARCH_ERROR = `${MODULE_ID}/SEARCH_ERROR`;

const searchLoading = (data = {}) => {
  return {
    type: SEARCH_LOADING,
    payload: data,
  };
};
const searchResponse = (data = {}) => {
  return {
    type: SEARCH_RESPONSE,
    payload: data,
  };
};
const searchError = (data = {}) => {
  return {
    type: SEARCH_ERROR,
    payload: data,
  };
};

export {
  SEARCH_LOADING,
  SEARCH_RESPONSE,
  SEARCH_ERROR,
  searchLoading,
  searchResponse,
  searchError,
};
