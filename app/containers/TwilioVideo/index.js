/**
 *
 * TwilioVideo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTwilioVideo from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Wrapper } from './styled';

export class TwilioVideo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>HI
      </Wrapper>
    );
  }
}

TwilioVideo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  twiliovideo: makeSelectTwilioVideo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'twilioVideo', reducer });
const withSaga = injectSaga({ key: 'twilioVideo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TwilioVideo);
