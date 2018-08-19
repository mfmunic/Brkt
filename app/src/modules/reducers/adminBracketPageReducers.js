import * as actionTypes from '../actionTypes';
import _ from 'lodash';

const initialState = { Empty: 'Yep' };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.FETCH_BRKTS}_FULFILLED`:
      return {
        ...state,
        ...action.payload.tests,
        Empty: 'Nope'
      };

    default:
      return state;
  }
}
