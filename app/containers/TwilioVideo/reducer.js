/*
 *
 * TwilioVideo reducer
 *
 */

import { fromJS, Set } from 'immutable';
import {
  ATTACH_LOCAL_MEDIA,
  CONNECT_TO_ROOM_REQUEST,
  CONNECT_TO_ROOM_SUCCESS,
  CONNECT_TO_ROOM_FAILURE,
  DISCONNECT_FROM_ROOM_REQUEST,
  DISCONNECT_FROM_ROOM_SUCCESS,
  DISCONNECT_FROM_ROOM_FAILURE,
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE,
  LOG_ACTIVITY,
  UPDATE_PARTICIPANTS,
  UPDATE_TRACKS,
} from './constants';

const initialState = fromJS({
  roomName: undefined,
  room: undefined,
  token: undefined,
  identity: undefined,
  errMsg: undefined,
  log: [],
  localMedia: [],
  participants: [],
  remoteMedia: [],
});

function twilioVideoReducer(state = initialState, action) {
  switch (action.type) {
    case ATTACH_LOCAL_MEDIA:
      return state.set('localMedia', action.tracks);
    case CONNECT_TO_ROOM_REQUEST:
      return state.set('errMsg', undefined);
    case CONNECT_TO_ROOM_SUCCESS:
      return state.set('room', action.room);
    case CONNECT_TO_ROOM_FAILURE:
      return state.set('errMsg', action.errMsg);
    case DISCONNECT_FROM_ROOM_REQUEST:
      return state.set('errMsg', undefined);
    case DISCONNECT_FROM_ROOM_SUCCESS:
      return state
      .set('remoteMedia', [])
      .set('localMedia', []);
    case DISCONNECT_FROM_ROOM_FAILURE:
      return state.set('errMsg', action.errMsg);
    case FETCH_TOKEN_REQUEST:
      return state
        .set('errMsg', undefined)
        .set('roomName', action.roomName);
    case FETCH_TOKEN_SUCCESS:
      return state
        .set('token', action.data.token)
        .set('identity', action.data.identity);
    case FETCH_TOKEN_FAILURE:
      return state
        .set('errMsg', action.errMsg);
    case LOG_ACTIVITY: {
      const log = state.get('log');
      const updatedLog = log.set(log.size, action.message);
      return state.set('log', updatedLog);
    }
    case UPDATE_PARTICIPANTS: {
      const updatedRemoteMedia = action.participants.length
        ? state.get('remoteMedia')
        : [];
      return state
        .set('remoteMedia', updatedRemoteMedia)
        .set('participants', action.participants);
    }
    case UPDATE_TRACKS: {
      const existingRemoteMedia = state.get('remoteMedia').toSet();
      const newRemoteMedia = Set(action.tracks);
      const updatedRemoteMedia = existingRemoteMedia.union(newRemoteMedia).toList();
      return state.set('remoteMedia', updatedRemoteMedia);
    }
    default:
      return state;
  }
}

export default twilioVideoReducer;
