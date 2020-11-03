const MODULE_ID = '@SEARCH';

const KILLERS_LOADING = `${MODULE_ID}/KILLERS_LOADING`;
const KILLERS_LOADED = `${MODULE_ID}/KILLERS_LOADED`;
const KILLERS_ERROR = `${MODULE_ID}/KILLERS_ERROR`;
const KILLERS_SORT = `${MODULE_ID}/KILLERS_SORT`;

const killersLoading = (data = {}) => {
  return {
    type: KILLERS_LOADING,
    payload: data,
  };
};
const killersLoaded = (data = {}) => {
  return {
    type: KILLERS_LOADED,
    payload: data,
  };
};
const killersError = (data = {}) => {
  return {
    type: KILLERS_ERROR,
    payload: data,
  };
};
const killersSort = (filter) => {
  return {
    type: KILLERS_SORT,
    payload: filter,
  };
};

export {
  killersLoading,
  killersLoaded,
  killersError,
  killersSort,
  KILLERS_LOADING,
  KILLERS_LOADED,
  KILLERS_ERROR,
  KILLERS_SORT,
};
