import { all, fork } from 'redux-saga/effects';
import search from './search';
import killers from './killers';

export default function* rootSaga() {
  yield all([
    fork(search),
    fork(killers)
  ]);
}