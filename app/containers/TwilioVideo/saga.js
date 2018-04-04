import { takeLatest, call, put } from 'redux-saga/effects';
import { get } from 'axios';
import { connect, createLocalTracks } from 'twilio-video';

import { baseUrl } from 'globalConstants/api';
import { FETCH_TOKEN_REQUEST } from './constants';
import {
  attachLocalMedia,
  connectToRoomSuccess,
  fetchTokenSuccess,
  fetchTokenFailure,
} from './actions';

export function* fetchToken({ roomName }) {
  const url = `${baseUrl}/token`;
  try {
    const response = yield call(get, url);
    yield put(fetchTokenSuccess(response.data));
    yield connectToRoom(response.data.token, roomName);
  } catch (e) {
    yield put(fetchTokenFailure(e));
  }
}

export function* connectToRoom(token, roomName) {
  const localTracks = yield createLocalTracks({
    audio: true,
    video: { width: 640 },
  });
  yield put(attachLocalMedia(localTracks));
  const room = yield connect(token, {
    name: roomName,
    tracks: localTracks,
  });
  yield put(connectToRoomSuccess(room));
}

export default function* defaultSaga() {
  yield takeLatest(FETCH_TOKEN_REQUEST, fetchToken);
}
