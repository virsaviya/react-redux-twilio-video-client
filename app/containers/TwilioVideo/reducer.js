/*
 *
 * TwilioVideo reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ATTACH_LOCAL_MEDIA,
  CONNECT_TO_ROOM_SUCCESS,
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE,
} from './constants';

const initialState = fromJS({
  roomName: undefined,
  room: undefined,
  token: undefined,
  identity: undefined,
  errMsg: undefined,
  log: [],
  localMedia: undefined,
});

function twilioVideoReducer(state = initialState, action) {
  const log = state.get('log');
  switch (action.type) {
    case ATTACH_LOCAL_MEDIA:
      return state.set('localMedia', action.tracks);
    case FETCH_TOKEN_REQUEST: {
      const message = `Requesting to join room '${action.roomName}'...`;
      const updatedLog = log.set(log.size, message);
      return state
        .set('roomName', action.roomName)
        .set('log', updatedLog);
    }
    case CONNECT_TO_ROOM_SUCCESS:
      return state.set('room', action.room);
    case FETCH_TOKEN_SUCCESS: {
      const message = `Successfully joined room '${state.get('roomName')}'.`;
      const updatedLog = log.set(log.size, message);
      return state
        .set('token', action.data.token)
        .set('identity', action.data.identity)
        .set('log', updatedLog);
    }
    case FETCH_TOKEN_FAILURE: {
      const message = `An error occurred while trying to join '${state.get('roomName')}': ${action.errMsg}`;
      const updatedLog = log.set(log.size, message);
      return state
        .set('errMsg', action.errMsg)
        .set('log', updatedLog);
    }
    default:
      return state;
  }
}

export default twilioVideoReducer;
