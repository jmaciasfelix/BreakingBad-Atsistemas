import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import {
  SEARCH_LOADING,
  SEARCH_RESPONSE,
  SEARCH_ERROR,
} from 'actions/search.action';
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
  try {
    const response = yield call(axios.get, ENDPOINT);


    yield put({
      type: SEARCH_RESPONSE,
      payload: { response: response.data[0], filter: payload.filter } || {
        retry: true,
      },
    });
  } catch (error) {
    yield put({
      type: SEARCH_ERROR,
      payload: { error: true },
    });
  }
}
