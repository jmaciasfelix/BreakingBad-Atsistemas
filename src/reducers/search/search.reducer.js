//importar las acciones
//actions
import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_RESPONSE } from 'actions';
import { createReducer } from '../util';

const initialState = {
  loading: false,
  lastSearch: {},
};

const searchLoading = (state = initialState, action) => {
  return {
    ...state,
    loading: true,
  };
};

const searchResponse = (state = initialState, action) => {
  return {
    loading: false,
    lastSearch: action.payload,
  };
};

const searchError = (state = initialState, action) => {
  return {
    loading: false,
    lastSearch: {},
  };
};

const searchReducer = createReducer(initialState, {
  [SEARCH_LOADING]: searchLoading,
  [SEARCH_RESPONSE]: searchResponse,
  [SEARCH_ERROR]: searchError
});

export { searchReducer };
