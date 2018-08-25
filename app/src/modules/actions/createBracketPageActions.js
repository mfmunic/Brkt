import _ from 'lodash';

import * as actionTypes from '../actionTypes';
import getBrktInfo from './singleElim/getBrktInfo.js';
import addNames from './singleElim/addNames.js';
import setBrkts from './firebase/setBrkts';
import { tArr, bArr, gArr } from './utils/titleWords.js';

export function randomTorName() {
  const tWord = tArr[_.random(0, tArr.length - 1)].toUpperCase();
  const bWord = bArr[_.random(0, bArr.length - 1)].toUpperCase();
  const gWord = gArr[_.random(0, gArr.length - 1)].toUpperCase();
  return {
    type: actionTypes.UPDATE_TOR_NAME,
    payload: `${tWord} ${bWord} ${gWord}`
  };
}

export function updateTorName(brktName) {
  return {
    type: actionTypes.UPDATE_TOR_NAME,
    payload: brktName
  };
}

export function resetState() {
  return {
    type: actionTypes.RESET_CREATE_STATE
  };
}

export function updateNoOfPlayers(noOfPlayers) {
  const brktInfo = getBrktInfo(noOfPlayers);
  return {
    type: actionTypes.UPDATE_NOOFPLAYERS,
    payload: { noOfPlayers, brktInfo }
  };
}

export function updatePlayerNames(players) {
  let arrPlayers = [];

  if (players !== '') {
    arrPlayers = players.split('\n');
  }

  let brktInfo = getBrktInfo(arrPlayers.length);
  brktInfo = addNames(brktInfo, arrPlayers);

  return {
    type: actionTypes.UPDATE_PLAYERNAMES,
    payload: { arrPlayers, brktInfo }
  };
}

export function switchInput(inputType, noOfPlayers, playerNames) {
  if (inputType === 'Number') {
    inputType = 'Names';

    playerNames = _.map(playerNames, (name, index) => {
      if (name.includes('<<Player ') || name === '') {
        name = `<<Player ${index + 1}>>`;
      }
      return name;
    });

    if (noOfPlayers < playerNames.length) {
      const removePlayers = playerNames.length - noOfPlayers;
      for (let i = 0; i < removePlayers; i++) {
        playerNames.pop();
      }
    } else {
      for (let i = playerNames.length; i < noOfPlayers; i++) {
        playerNames.push(`<<Player ${i + 1}>>`);
      }
    }
  } else {
    inputType = 'Number';
  }
  return {
    type: actionTypes.SWITCH_INPUT_TYPE,
    payload: { inputType, noOfPlayers, playerNames }
  };
}

//firbase specific

export function addBrkt(newBrkt, brktName) {
  const brkt = { brktInfo: newBrkt, brktName };
  setBrkts(brkt);
  return {
    type: actionTypes.PUBLISHED_BRKT,
    payload: brkt
  };
}

// --- not actually for this file
// export const completeToDo = completeToDoId => async dispatch => {
//   todosRef.child(completeToDoId).remove();
// };

// export const fetchToDos = () => async dispatch => {
//   todosRef.on('value', snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };
// --- not actually for this file
