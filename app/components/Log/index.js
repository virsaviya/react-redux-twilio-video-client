/**
*
* Log
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  LogLine,
  Wrapper,
} from './styled';

class Log extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidUpdate() {
    this._scrollToBottomOfLog(); // eslint-disable-line no-underscore-dangle
  }
  componenetDidMount() {
    this._scrollToBottomOfLog(); // eslint-disable-line no-underscore-dangle
  }
  _scrollToBottomOfLog = () => {
    this.logEnds.scrollIntoView({ behavior: 'smooth' });
  }
  render() {
    return (
      <Wrapper>
        {this.props.content.map((message, idx) =>
          <LogLine key={`log-${idx}`}>{`> ${message}`}</LogLine>)} 
        <div
          style={{ float: 'right', margin: '0' }}
          ref={(el) => { this.logEnds = el; }}
        />
      </Wrapper>
    );
  }
}

Log.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Log;
