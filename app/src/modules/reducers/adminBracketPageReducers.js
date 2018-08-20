import * as actionTypes from '../actionTypes';
import _ from 'lodash';

const initialState = { owned: [] };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.FETCH_BRKTS}_FULFILLED`:
      _.forEach(action.payload, (value, key) => {
        initialState.owned.push({ key: key, boxProps: value });
      });

      return {
        ...initialState
      };

    case `${actionTypes.DELETE_BRKTS}`:
      console.log(state.owned);
      const keyIndex = _.findIndex(state.owned, ['key', action.payload]);
      _.pullAt(state.owned, keyIndex);

      return {
        owned: state.owned
      };

    default:
      return state;
  }
}
