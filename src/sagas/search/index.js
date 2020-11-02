import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import { SEARCH_LOADING, SEARCH_RESPONSE, SEARCH_ERROR } from 'actions';
//TODO eliminar axios y usar un servicio || ELiminar console log
import axios from 'axios';
import { getEndpointByFilter } from 'services/getEndpointByFilter';

export default function* usersSaga() {
  yield spawn(watchSearchAsync);
}

function* watchSearchAsync() {
  yield takeEvery(SEARCH_LOADING, getUsers);
}

function* getUsers({ payload }) {
  const ENDPOINT = getEndpointByFilter(payload.filter, payload.searchValue);
  console.log(payload)
  console.log(ENDPOINT);
  try {
    const response = yield call(axios.get, ENDPOINT);
    yield put({
      type: SEARCH_RESPONSE,
      payload: { response: response.data[0], filter: payload.filter } || {
        retry: true,
      },
    });
  } catch (error) {
    console.error(`ERROR getUsers SAGA: ${error}`);
    yield put({
      type: SEARCH_ERROR,
      payload: { error: true },
    });
  }
}
