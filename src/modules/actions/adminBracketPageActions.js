import * as actionTypes from '../actionTypes';
import readBrkts from './firebase/readBrkts';
import removeBrkts from './firebase/removeBrkts';

export function fetchBrkts() {
  let brkts = readBrkts();

  return {
    type: actionTypes.FETCH_BRKTS,
    payload: brkts
  };
}

export function deleteBrkts(key) {
  removeBrkts(key);
  return {
    type: actionTypes.DELETE_BRKTS,
    payload: key
  };
}
