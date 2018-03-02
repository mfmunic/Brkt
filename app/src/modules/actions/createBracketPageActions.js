import * as actionTypes from '../actionTypes';

export function updateNoOfPlayers(noOfPlayers) {
  return {
    type: actionTypes.UPDATE_NOOFPLAYERS,
    payload: noOfPlayers
  };
}

export function updatePlayerNames(players) {
  const arrPlayers = players.split('\n');
  return {
    type: actionTypes.UPDATE_PLAYERNAMES,
    payload: arrPlayers
  };
}

export function switchInput(inputType) {
  if (inputType === 'Number') {
    inputType = 'Names';
  } else {
    inputType = 'Number';
  }
  return {
    type: actionTypes.SWITCH_INPUT_TYPE,
    payload: inputType
  };
}
