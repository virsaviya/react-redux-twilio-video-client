import React from 'react';
import styled from 'styled-components';
import {
  DARK_BACKGROUND,
  DARK_FONT,
  DARK_GRAY,
  GRAY,
} from 'globalConstants/colors';
import { PAGE_MARGIN } from 'globalConstants/sizes';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${DARK_BACKGROUND};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: #eeeeee;
`;

export const RemoteMedia = styled.div`
background-color: ${DARK_GRAY};
position: relative;
height: calc(100% - 100px);
width: calc(100% - 40px);
margin: ${PAGE_MARGIN};
`;

export const LocalMedia = styled.div`
  background-color: ${GRAY};
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 200px;
`;
