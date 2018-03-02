import * as actionTypes from '../actionTypes';

const initialState = {
  noOfPlayers: 0,
  playerNames: [],
  inputSwitch: 'Number'
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.UPDATE_NOOFPLAYERS:
      return {
        ...state,
        noOfPlayers: action.payload
      };

    case actionTypes.UPDATE_PLAYERNAMES:
      const noOfPlayers = action.payload.length;
      return {
        noOfPlayers: noOfPlayers,
        playerNames: action.payload
      };

    case actionTypes.SWITCH_INPUT_TYPE:
      return {
        inputSwitch: action.payload
      };

    default:
      return state;
  }
}
