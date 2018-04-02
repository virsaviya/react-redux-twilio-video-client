import React from 'react';
import styled from 'styled-components';
import {
  LIGHT_FONT,
  GRAY,
} from 'globalConstants/colors';
import { JOIN_ROOM_WIDTH, PAGE_MARGIN } from 'globalConstants/sizes';

export const Wrapper = styled.ul`
  height: 90px;
  width: calc(100% - ${JOIN_ROOM_WIDTH} - ${PAGE_MARGIN});
  background-color: ${GRAY};
  padding: 5px;
  overflow-y: scroll;
  margin: 0;
`;

export const LogLine = styled.li`
  font-family: 'Share Tech Mono', 'Courier New', Courier, fixed-width;
  margin: 0;
  font-size: .85em;
  color: ${LIGHT_FONT};
`;
