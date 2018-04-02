import React from 'react';
import styled from 'styled-components';
import {
  DARK_FONT,
  LIGHT_BACKGROUND,
  WHITE,
} from 'globalConstants/colors';
import { JOIN_ROOM_WIDTH, PAGE_MARGIN } from 'globalConstants/sizes';

export const Wrapper = styled.div`
  width: calc(100% - 40px);
  margin: 0 ${PAGE_MARGIN} ${PAGE_MARGIN} ${PAGE_MARGIN};
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const JoinRoom = styled.div`
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
  background-color: ${LIGHT_BACKGROUND};
  border-radius: 2px;
  height: 40px;
  width: ${JOIN_ROOM_WIDTH};
  color: ${DARK_FONT};
  padding-left: 5px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${WHITE};
  border-radius: 2px;
  height: 40px;
  width: ${JOIN_ROOM_WIDTH};
  padding: 0 15px;
  margin: 10px 0;
`;
