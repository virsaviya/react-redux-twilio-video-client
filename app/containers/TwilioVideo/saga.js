import { eventChannel } from 'redux-saga';
import { takeLatest, call, put, fork, take } from 'redux-saga/effects';
import { get } from 'axios';
import { connect, createLocalTracks } from 'twilio-video';

import { baseUrl } from 'globalConstants/api';
import { FETCH_TOKEN_REQUEST, DISCONNECT_FROM_ROOM_REQUEST } from './constants';
import {
  attachLocalMedia,
  connectToRoomSuccess,
  disconnectFromRoomSuccess,
  disconnectFromRoomFailure,
  fetchTokenSuccess,
  fetchTokenFailure,
  logActivity,
  updateParticipants,
  updateTracks,
} from './actions';


export function* fetchToken({ roomName }) {
  const url = `${baseUrl}/token`;
  try {
    const response = yield call(get, url);
    yield put(fetchTokenSuccess(response.data));
    yield put(logActivity(`Successfully fetched a token for '${response.data.identity}'.`));
    yield put(logActivity(`Requesting to connect to '${roomName}'...`));
    yield connectToRoom(response.data.token, roomName);
  } catch (e) {
    yield put(fetchTokenFailure(e));
    yield put(logActivity(`An error occurred while trying to join '${roomName}': ${e}`));
  }
}

export function* connectToRoom(token, roomName) {
  yield put(logActivity('Connecting local media...'));
  const localTracks = yield createLocalTracks({
    audio: true,
    video: { width: 640 },
  });
  yield put(attachLocalMedia(localTracks));
  yield put(logActivity('Successfully connected local media.'));
  const room = yield connect(token, {
    name: roomName,
    tracks: localTracks,
  });
  yield put(connectToRoomSuccess(room));
  yield put(logActivity(`Successfully connected to '${roomName}'.`));
  yield fork(read, room);
}

function* read(room) {
  const channel = yield call(subscribe, room);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function subscribe(room) {
  return eventChannel((emit) => {
    /* LocalParticipant disconnected from the room */
    room.on('disconnected', (currentRoom, err) => {
      if (err) {
        emit(logActivity(`Unexpectedly disconnected: ${err}`));
        emit(disconnectFromRoomFailure(err));
      }
      emit(disconnectFromRoomSuccess());
      emit(logActivity(`You have left the room '${room.name}'.`));
    });

    /* RemoteParticipant joined the room */
    room.on('participantConnected', (participant) => {
      const participants = Array.from(room.participants.values());
      emit(updateParticipants(participants));
      emit(logActivity(`'${participant.identity}' joined the room.`));
    });

    /* RemoteParticipant left the room */
    room.on('participantDisconnected', (participant) => {
      const participants = Array.from(room.participants.values());
      emit(updateParticipants(participants));
      emit(logActivity(`'${participant.identity}' left the room.`));
    });

    /* RemoteTrack was aded by a RemoteParticipant in the room */
    room.on('trackSubscribed', (track, participant) => {
      const tracks = Array.from(participant.tracks.values());
      emit(updateTracks(tracks));
      emit(logActivity(`New media track was added from '${participant.identity}'`));
    });

    /* RemoteTrack was removed by a RemoteParticipant in the room */
    room.on('trackSubscribed', (track, participant) => {
      const tracks = Array.from(participant.tracks.values());
      emit(updateTracks(tracks));
      emit(logActivity(`A media track was removed by '${participant.identity}'`));
    });

    return () => {};
  });
}

export function* disconnectFromRoom({ room }) {
  try {
    room.disconnect();
    yield put(disconnectFromRoomSuccess());
    yield put(logActivity(`You have left the room '${room.name}'.`));
  } catch (e) {
    yield put(disconnectFromRoomFailure(e));
    yield put(logActivity(`An error occurred while trying to leave '${room.name}': ${e}`));
  }
}

export default function* watcher() {
  yield [
    takeLatest(FETCH_TOKEN_REQUEST, fetchToken),
    takeLatest(DISCONNECT_FROM_ROOM_REQUEST, disconnectFromRoom),
  ];
}
