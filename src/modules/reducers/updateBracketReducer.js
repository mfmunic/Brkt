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
        brktName: action.payload.brkt.brktName,
        playerNames: action.payload.brkt.playerNames,
        brktKey: action.payload.key
      };

    default:
      return state;
  }
}
