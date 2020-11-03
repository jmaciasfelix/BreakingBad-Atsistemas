import {
  KILLERS_ERROR,
  KILLERS_LOADING,
  KILLERS_SORT,
  KILLERS_LOADED,
} from 'actions/killers.action';
import { createReducer } from '../util';

const initialState = {
  loading: false,
  killers: {},
};

const killersLoading = (state = initialState, action) => {
  return {
    ...state,
    loading: true,
  };
};

const killersLoaded = (state = initialState, action) => {
  return {
    loading: false,
    deathCount: action.payload,
  };
};

const killersError = (state = initialState, action) => {
  return {
    loading: false,
    deathCount: {},
  };
};

const killersSort = (state = initialState, action) => {
  console.log(action);
  return {
    ...state,
    deathCount:
      action.payload.filter === 1
        ? action.payload.deathCount.sort((a, b) => sortDeathCount(b, a))
        : action.payload.deathCount.sort((a, b) => sortDeathCount(a, b)),
  };
};

const sortDeathCount = (a, b) => {
  if (a.deathCount > b.deathCount) {
    return -1;
  }
  if (a.deathCount < b.deathCount) {
    return 1;
  }
  return 0;
};

const killersReducer = createReducer(initialState, {
  [KILLERS_ERROR]: killersError,
  [KILLERS_LOADING]: killersLoading,
  [KILLERS_LOADED]: killersLoaded,
  [KILLERS_SORT]: killersSort,
});

export { killersReducer };
