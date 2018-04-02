import { createSelector } from 'reselect';

/**
 * Direct selector to the twilioVideo state domain
 */
const selectTwilioVideoDomain = (state) => state.get('twilioVideo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TwilioVideo
 */

const makeSelectTwilioVideo = () => createSelector(
  selectTwilioVideoDomain,
  (substate) => substate.toJS()
);

export default makeSelectTwilioVideo;
export {
  selectTwilioVideoDomain,
};
