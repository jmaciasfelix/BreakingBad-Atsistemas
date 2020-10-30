import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import { SEARCH_LOADING, SEARCH_RESPONSE, SEARCH_ERROR } from 'actions';
//TODO eliminar axios y usar un servicio || ELiminar console log
import axios from 'axios';

export default function* usersSaga() {
  yield spawn(watchGetUserAsync);
}

function* watchGetUserAsync() {
  yield takeEvery(SEARCH_LOADING, getUsers);
}

function* getUsers() {
  try {
    console.log('getUsers SAGA');
    const ENDPOINT = 'https://reqres.in/api/users';
    const response = yield call(axios.get, ENDPOINT);
    yield put({ type: SEARCH_RESPONSE, payload: response.data.data });
  } catch (error) {
    console.log('ha ocurrido un error en SAGA');
    yield put({
      type: SEARCH_ERROR,
      payload: error.response.data,
    });
  }
}
