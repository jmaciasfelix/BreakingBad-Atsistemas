import { combineReducers } from 'redux';
import { searchReducer } from './search/search.reducer';
import { killersReducer } from './killers/killers.reducer';

export const reducers = combineReducers({ searchReducer,killersReducer });
