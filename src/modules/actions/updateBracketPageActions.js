// import _ from 'lodash';

import * as actionTypes from '../actionTypes';

export function updateBrkt(brkt, key) {
  return {
    type: actionTypes.UPDATE_BRKT,
    payload: { brkt, key }
  };
}
