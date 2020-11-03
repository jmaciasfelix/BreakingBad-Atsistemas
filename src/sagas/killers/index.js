//redux saga
import { spawn, takeEvery, call, put } from 'redux-saga/effects';
//services
import { getDeaths } from 'services/getDeaths';
import { getCharacters } from 'services/getCharacters';
//actions killer
import {
  KILLERS_LOADING,
  KILLERS_LOADED,
  KILLERS_ERROR,
} from 'actions/killers.action';


export default function* usersSaga() {
  yield spawn(watchKillersAsync);
}

function* watchKillersAsync() {
  yield takeEvery(KILLERS_LOADING, getKillers);
}

function* getKillers() {
  const ENDPOINT = 'https://breakingbadapi.com/api/death-count';
  try {
    const characters = yield call(getCharacters, ENDPOINT);
    const nameCharacter = characters.map(({ name }) =>
      name.replaceAll(' ', '+')
    );
    const response = yield call(getDeaths, nameCharacter);
    
    yield put({
      type: KILLERS_LOADED,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: KILLERS_ERROR,
    });
  }
}
