/**
*
* MediaTrack
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { AUDIO, VIDEO } from './constants';

class MediaTrack extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    /* The attach() method returns <video /> with a srcObject tag, which JSX
     * doesn't recognize, and instead interperts as an object, and so throws
     * an error.  As a result, we manually add the srcObject using the ref api.
     * http://www.programfaqs.com/faq/how-to-set-srcobject-on-audio-element-with-react/
     */
    this.source.srcObject = this.props.track.attach().srcObject;
  }
  render() {
    return (this.props.kind === AUDIO)
      ? (<audio
        ref={(source) => { this.source = source; }}
        controls
        autoPlay
      />)
      : (<video
        ref={(source) => { this.source = source; }}
        controls
        autoPlay
        width={this.props.width}
      />);
  }
}

MediaTrack.propTypes = {
  track: PropTypes.object.isRequired,
  kind: PropTypes.oneOf([AUDIO, VIDEO]).isRequired,
  width: PropTypes.string,
};

export default MediaTrack;
