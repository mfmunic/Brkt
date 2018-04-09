//-------------------------------------------------------
//add x, y coods to each match
//-------------------------------------------------------

const _ = require('lodash');

module.exports = function addMainCoords(matchObj, init) {
  _.map(matchObj, (match, index) => {
    if (match.main === true) {
      match.xLoc =
        (init.box.rndWid + init.box.svgWid) * match.heat -
        (init.box.rndWid + init.box.svgWid);

      const heat = _.find(init.heats, { heat: match.heat });
      const heatSectMids = init.box.height / heat.noMatch / 2;
      const heatArr = heat.matches.sort(function(a, b) {
        return a - b;
      });
      const matchHeatArrPos = heatArr.indexOf(match.match) + 1;
      const matchHeatColPos = matchHeatArrPos * heatSectMids;
      match.yLoc = matchHeatColPos - init.box.rndHgt / 2;
    }
  });
  console.log(matchObj);
};
