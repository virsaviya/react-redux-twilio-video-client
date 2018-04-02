/**
 *
 * TwilioVideo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Controls from 'components/Controls';
import makeSelectTwilioVideo from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchTokenRequest } from './actions';
import {
  Header,
  LocalMedia,
  RemoteMedia,
  Wrapper,
} from './styled';

export class TwilioVideo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { roomName } = this.props;
    return (
      <Wrapper>
        <Header>{roomName ? `You are in room '${roomName}'` : 'Welcome'}</Header>
        <RemoteMedia>
          <LocalMedia />
        </RemoteMedia>
        <Controls
          joinRoom={(room) => this.props.fetchToken(room)}
          log={this.props.log}
        />
      </Wrapper>
    );
  }
}

TwilioVideo.propTypes = {
  fetchToken: PropTypes.func.isRequired,
  roomName: PropTypes.string,
  log: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => makeSelectTwilioVideo(state);

const mapDispatchToProps = (dispatch) => ({
  fetchToken: (roomName) => dispatch(fetchTokenRequest(roomName)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'twilioVideo', reducer });
const withSaga = injectSaga({ key: 'twilioVideo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TwilioVideo);
