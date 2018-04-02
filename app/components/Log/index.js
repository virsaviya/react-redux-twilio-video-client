/**
*
* Log
*
*/

import React from 'react';
import {
  LogLine,
  Wrapper,
} from './styled';

class Log extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  _scrollToBottomOfLog = () => {
    this.logEnds.scrollIntoView({ behavior: 'smooth' });
  }
  componenetDidMount() {
    this._scrollToBottomOfLog();
  }
  componentDidUpdate() {
    this._scrollToBottomOfLog();
  }
  render() {
    return (
      <Wrapper>
        {this.props.content.map((message, idx) =>
          <LogLine key={idx}>{`> ${message}`}</LogLine>)}
        <div
          style={{ float: 'right', margin: '0' }}
          ref={(el) => { this.logEnds = el; }}
        />
      </Wrapper>
    );
  }
}

Log.propTypes = {

};

export default Log;
