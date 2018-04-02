
import { fromJS } from 'immutable';
import twilioVideoReducer from '../reducer';

describe('twilioVideoReducer', () => {
  it('returns the initial state', () => {
    expect(twilioVideoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
