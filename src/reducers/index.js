import { combineReducers } from 'redux';
import { searchReducer } from './search/search.reducer';

export const reducers = combineReducers({ searchReducer });