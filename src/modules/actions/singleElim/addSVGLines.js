//-------------------------------------------------------------------------------
//Takes in matches object and returns an array of svg lines
//-------------------------------------------------------------------------------

const _ = require('lodash');

module.exports = function addSVGLines(matchObj, init) {
  const { rndWid, rndHgt, svgWid } = init.box;

  const svgs = _.map(matchObj, matchElem => {
    const { match, goesTo, goesToPos } = matchElem;
    let pointString;
    if (goesTo) {
      const pt1X = matchObj[`match${match}`].xLoc + rndWid;
      const pt1Y = matchObj[`match${match}`].yLoc + rndHgt * 0.62;
      const pt2X = matchObj[`match${match}`].xLoc + rndWid + svgWid / 2;
      const pt2Y = pt1Y;
      const pt3X = matchObj[`match${match}`].xLoc + rndWid + svgWid / 2;
      const pt3Y =
        goesToPos === 'upper'
          ? matchObj[`match${goesTo}`].yLoc + rndHgt * 0.45
          : matchObj[`match${goesTo}`].yLoc + rndHgt * 0.8;

      const pt4X = matchObj[`match${goesTo}`].xLoc;
      const pt4Y = pt3Y;

      pointString = `${pt1X},${pt1Y} ${pt2X},${pt2Y} ${pt3X},${pt3Y} ${pt4X},${pt4Y}`;
    }
    return pointString;
  });
  return _.pull(svgs, undefined);
};
