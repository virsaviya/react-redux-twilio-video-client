import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #272726;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: #eeeeee;
`;

export const RemoteMedia = styled.div`
background-color: #424242;
position: relative;
height: calc(100% - 100px);
width: calc(100% - 40px);
margin: 20px;
`;

export const LocalMedia = styled.div`
  background-color: #565656;
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 200px;
`;

export const Instructions = styled.div`
  background-color: #565656;
  width: calc(100% - 40px);
  margin: 0 20px 20px 20px;
  height: 100px;
`;
