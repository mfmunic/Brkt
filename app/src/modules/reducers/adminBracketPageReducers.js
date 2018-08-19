import * as actionTypes from '../actionTypes';
import _ from 'lodash';

const initialState = { owned: [] };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.FETCH_BRKTS}_FULFILLED`:
      _.forEach(action.payload, value => initialState.owned.push(value));

      return {
        ...initialState
      };

    default:
      return state;
  }
}
