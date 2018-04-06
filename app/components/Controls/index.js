/**
*
* Controls
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Log from 'components/Log';
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
  _onClick = () => {
    if (this.props.isInRoom) {
      this.props.leaveRoom();
    } else {
      this.props.joinRoom(this.state.roomName);
    }
  }
  render() {
    return (
      <Wrapper>
        <Log content={this.props.log} />
        <JoinRoom>
          <Input
            onChange={(e) => this.setState({ roomName: e.target.value })}
            placeholder="Room Name"
          />
          <Button onClick={this._onClick}>
            {this.props.isInRoom ? 'Leave Room' : 'Join Room'}
          </Button>
        </JoinRoom>
      </Wrapper>
    );
  }
}

Controls.propTypes = {
  isInRoom: PropTypes.bool.isRequired,
  joinRoom: PropTypes.func.isRequired,
  leaveRoom: PropTypes.func.isRequired,
  log: PropTypes.array.isRequired,
};

export default Controls;
