import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import { SEARCH_LOADING, SEARCH_RESPONSE, SEARCH_ERROR } from 'actions';
//TODO eliminar axios y usar un servicio || ELiminar console log
import axios from 'axios';

export default function* usersSaga() {
  yield spawn(watchSearchAsync);
}

function* watchSearchAsync() {
  yield takeEvery(SEARCH_LOADING, getUsers);
}

//TODO
const getEndpointByFilter = (filter, value) => {
  console.log(`Endpoint dependiendo del filtro ${filter} value ${value}`);
  return `https://www.breakingbadapi.com/api/characters?name=${value}`;
};

function* getUsers({ payload }) {
  const ENDPOINT = getEndpointByFilter(payload.filter, payload.searchValue);
  try {
    const response = yield call(axios.get, ENDPOINT);
    yield put({
      type: SEARCH_RESPONSE,
      payload: response.data[0],
    });
  } catch (error) {
    console.error(`ERROR getUsers SAGA: ${error}`);
    yield put({
      type: SEARCH_ERROR,
      payload: error.response.data,
    });
  }
}
