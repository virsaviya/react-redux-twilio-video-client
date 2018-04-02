import { takeLatest, call, put, select } from 'redux-saga/effects';
import { get } from 'axios';

import { baseUrl } from 'globalConstants/api';
import { FETCH_TOKEN_REQUEST } from './constants';
import { fetchTokenSuccess, fetchTokenFailure} from './actions';

export function* fetchToken() {
  const url = `${baseUrl}/token`;
  try {
    const response = yield call(get, url);
    yield put(fetchTokenSuccess(response.data))
  } catch(e) {
    yield put(fetchTokenFailure(e));
  }
}

export default function* defaultSaga() {
  yield takeLatest(FETCH_TOKEN_REQUEST, fetchToken);
}
