/*
 *
 * TwilioVideo actions
 *
 */

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

export const attachLocalMedia = (tracks) => ({
  type: ATTACH_LOCAL_MEDIA,
  tracks,
});

export const connectToRoomRequest = () => ({
  type: CONNECT_TO_ROOM_REQUEST,
});

export const connectToRoomSuccess = (room) => ({
  type: CONNECT_TO_ROOM_SUCCESS,
  room,
});

export const connectToRoomFailure = (errMsg) => ({
  type: CONNECT_TO_ROOM_FAILURE,
  errMsg,
});

export const disconnectFromRoomRequest = (room) => ({
  type: DISCONNECT_FROM_ROOM_REQUEST,
  room,
});

export const disconnectFromRoomSuccess = () => ({
  type: DISCONNECT_FROM_ROOM_SUCCESS,
});

export const disconnectFromRoomFailure = (errMsg) => ({
  type: DISCONNECT_FROM_ROOM_FAILURE,
  errMsg,
});

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

export const logActivity = (message) => ({
  type: LOG_ACTIVITY,
  message,
});

export const updateParticipants = (participants, room) => ({
  type: UPDATE_PARTICIPANTS,
  participants,
  room,
});

export const updateTracks = (tracks) => ({
  type: UPDATE_TRACKS,
  tracks,
});
