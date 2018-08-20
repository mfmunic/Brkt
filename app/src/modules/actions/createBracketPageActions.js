import * as actionTypes from '../actionTypes';
import getBrktInfo from './singleElim/getBrktInfo.js';
import addNames from './singleElim/addNames.js';
import setBrkts from './firebase/setBrkts';

export function updateNoOfPlayers(noOfPlayers) {
  const brktInfo = getBrktInfo(noOfPlayers);
  return {
    type: actionTypes.UPDATE_NOOFPLAYERS,
    payload: { noOfPlayers, brktInfo }
  };
}

export function updatePlayerNames(players) {
  const arrPlayers = players.split('\n');
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
    if (noOfPlayers < playerNames.length) {
      const removePlayers = playerNames.length - noOfPlayers;
      for (let i = 0; i < removePlayers; i++) {
        playerNames.pop();
      }
    } else {
      const addPlayers = noOfPlayers - playerNames.length;
      for (let i = 0; i < addPlayers; i++) {
        playerNames.push('');
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

export function addBrkt(newBrkt) {
  setBrkts(newBrkt);
  return {
    type: actionTypes.PUBLISHED_BRKT,
    payload: newBrkt
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
