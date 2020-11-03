import { all, spawn } from 'redux-saga/effects';
import search from './search';
import killers from './killers';

export default function* rootSaga() {
  yield all([search, killers]);
}
