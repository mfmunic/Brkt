//-------------------------------------------------------
//adds names from array to match obj
//-------------------------------------------------------

const _ = require('lodash');

module.exports = function addNames(brkt, nameArr) {
  const { matches } = brkt;
  _.map(matches, match => {
    if (match.player1seed !== '') {
      match.player1Name = nameArr[match.player1seed - 1];
    }
    if (match.player2seed !== '') {
      match.player2Name = nameArr[match.player2seed - 1];
    }
  });
  return brkt;
};
