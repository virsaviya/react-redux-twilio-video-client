/**
*
* Controls
*
*/

import React from 'react';
import {
  Button,
  Input,
  JoinRoom,
  Log,
  Wrapper,
} from './styled';

function Controls() {
  return (
    <Wrapper>
      <Log />
      <JoinRoom>
        <Input placeholder="Room Name" />
        <Button>Join Room</Button>
      </JoinRoom>
    </Wrapper>
  );
}

Controls.propTypes = {

};

export default Controls;
