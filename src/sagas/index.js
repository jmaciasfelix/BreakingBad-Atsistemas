import { spawn } from 'redux-saga/effects';
import search from './search';
import killers from './killers';

export default function* rootSaga() {
  yield spawn([search, killers]);
}
