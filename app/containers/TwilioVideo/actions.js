/*
 *
 * TwilioVideo actions
 *
 */

import {
  ATTACH_LOCAL_MEDIA,
  CONNECT_TO_ROOM_SUCCESS,
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE,
} from './constants';

export const fetchTokenRequest = (roomName) => ({
  type: FETCH_TOKEN_REQUEST,
  roomName,
});

export const fetchTokenSuccess = (data) => ({
  type: FETCH_TOKEN_SUCCESS,
  data,
});

export const fetchTokenFailure = (errMsg) => ({
  type: FETCH_TOKEN_FAILURE,
  errMsg,
});

export const attachLocalMedia = (tracks) => ({
  type: ATTACH_LOCAL_MEDIA,
  tracks,
});

export const connectToRoomSuccess = (room) => ({
  type: CONNECT_TO_ROOM_SUCCESS,
  room,
});
