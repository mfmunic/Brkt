import * as actionTypes from '../actionTypes';
import readBrkts from './firebase/readBrkts';

export function fetchBrkts() {
  let brkts = readBrkts();

  return {
    type: actionTypes.FETCH_BRKTS,
    payload: brkts
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
