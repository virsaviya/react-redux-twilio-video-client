/**
*
* Controls
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Log from 'components/Log'
import {
  Button,
  Input,
  JoinRoom,
  Wrapper,
} from './styled';

export class Controls extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    roomName: undefined,
  }
  render() {
    return (
      <Wrapper>
        <Log content={this.props.log}/>
        <JoinRoom>
          <Input
            onChange={(e) => this.setState({roomName: e.target.value})}
            placeholder="Room Name"
          />
          <Button onClick={() => this.props.joinRoom(this.state.roomName)}>
            Join Room
          </Button>
        </JoinRoom>
      </Wrapper>
    );
  }
}

Controls.propTypes = {
  joinRoom: PropTypes.func.isRequired,
};

export default Controls;
