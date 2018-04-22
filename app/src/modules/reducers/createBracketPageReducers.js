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
        noOfPlayers: action.payload.noOfPlayers,
        brktInfo: action.payload.brktInfo
      };

    case actionTypes.UPDATE_PLAYERNAMES:
      const noOfPlayers = action.payload.length;
      return {
        ...state,
        noOfPlayers: noOfPlayers,
        playerNames: action.payload.arrPlayers,
        brktInfo: action.payload.brktInfo
      };

    case actionTypes.SWITCH_INPUT_TYPE:
      return {
        ...state,
        inputSwitch: action.payload.inputType,
        noOfPlayers: action.payload.noOfPlayers,
        playerNames: action.payload.playerNames
      };

    default:
      return state;
  }
}
