//-------------------------------------------------------
//add x, y coods to each extra match
//-------------------------------------------------------

const _ = require('lodash');

module.exports = function addExtCoords(matchObj, init) {
  const { extHgt } = init.box;
  _.map(matchObj, (match, index) => {
    if (match.heat === 1) {
      match.xLoc = 0;
      const mainMatch = matchObj[`match${match.goesTo}`];
      if (match.goesToPos === 'upper') {
        match.yLoc = mainMatch.yLoc - extHgt;
      } else if (match.goesToPos === 'lower') {
        match.yLoc = mainMatch.yLoc + extHgt;
      }
    }
  });
};
