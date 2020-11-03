import { spawn, takeEvery, call, put } from 'redux-saga/effects';

import { getDeaths } from 'services/getDeaths';
import { getCharacters } from 'services/getCharacters';

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

//Cada vez que se llame a KILLERS_LOADING se pone a loading a true
//Se comprueba si existe algo en local storage -> si existe la saga dispara KILLERS_LOADED
//Si no existe llama a axios para obtener todo
//Cuando recibe los datos, los procesa **, los guarada en localStorage y ejecuta KILLERS_LOADED
//Si ha ocurrido un error se lanza KILLERS_ERROR

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
    console.error(`ERROR getUsers SAGA: ${error}`);
    yield put({
      type: KILLERS_ERROR,
    });
  }
}
