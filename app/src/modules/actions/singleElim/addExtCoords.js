//-------------------------------------------------------
//add x, y coods to each extra match
//-------------------------------------------------------

const _ = require('lodash');

module.exports = function addExtCoords(matchObj, init) {
  _.map(matchObj, (match, index) => {
    if (match.heat === 2) {
      const extMatch = _.find(matchObj, { match: match.getFrom });
      extMatch.xLoc = 0;
      if (extMatch.goesToPos === 'upper') {
        extMatch.yLoc = match.yLoc + init.box.rndHgt / 2;
      } else {
        extMatch.yLoc = match.yLoc - init.box.rndHgt / 2;
      }
    }
  });
};
