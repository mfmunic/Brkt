import * as actionTypes from '../actionTypes';

const initialState = {
  brktName: '',
  brktKey: ''
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.UPDATE_BRKT}`:
      return {
        ...state,
        ...action.payload.brkt.brktInfo,
        brktKey: action.payload.key
      };

    default:
      return state;
  }
}
