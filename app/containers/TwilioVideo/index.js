/**
 *
 * TwilioVideo
 *
 */

/* 3rd party libraries */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

/* local files in other directories */
import Controls from 'components/Controls';
import MediaTrack from 'components/MediaTrack';
import { AUDIO, VIDEO } from 'components/MediaTrack/constants';
import { LOCAL_MEDIA_WIDTH } from 'globalConstants/sizes';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* local files in this container */
import reducer from './reducer';
import makeSelectTwilioVideo from './selectors';
import saga from './saga';
import { fetchTokenRequest } from './actions';
import {
  Header,
  LocalMedia,
  RemoteMedia,
  Wrapper,
} from './styled';

export class TwilioVideo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  _renderMedia(media, kind, width) {
    if (media) {
      const track = media.find((m) => m.kind === kind);
      return <MediaTrack track={track} width={width} />;
    }
    return <div />;
  }
  render() {
    const { roomName, localMedia } = this.props;
    return (
      <Wrapper>
        <Header>{roomName ? `You are in room '${roomName}'` : 'Welcome'}</Header>
        <RemoteMedia>
          <LocalMedia hasMediaTrack={!!this.props.localMedia}>
            {this._renderMedia(localMedia, AUDIO)}
            {this._renderMedia(localMedia, VIDEO, LOCAL_MEDIA_WIDTH)}
          </LocalMedia>
        </RemoteMedia>
        <Controls
          joinRoom={(name) => this.props.fetchToken(name)}
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
  localMedia: PropTypes.array,
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
