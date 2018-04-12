import * as actionTypes from '../actionTypes';
import getBrktInfo from './singleElim/getBrktInfo.js';

export function updateNoOfPlayers(noOfPlayers) {
  const brktInfo = getBrktInfo(noOfPlayers);
  return {
    type: actionTypes.UPDATE_NOOFPLAYERS,
    payload: { noOfPlayers, brktInfo }
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
