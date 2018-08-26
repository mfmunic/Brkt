const addMainMatches = require('./addMainMatches');
const createMatchObject = require('./createMatchObject');
const createInitObj = require('./createInitObj');
const addExtraMatches = require('./addExtraMatches');
const addMainCoords = require('./addMainCoords');
const addExtCoords = require('./addExtCoords');
const addSVGLines = require('./addSVGLines');

module.exports = function getBrktInfo(seeds) {
  let brktInfo = { box: {} };
  if (seeds < 2) {
    brktInfo.box.width = 100;
    brktInfo.box.height = 100;
    return brktInfo;
  } else {
    const initObj = createInitObj(seeds);

    const matches = createMatchObject(initObj);
    addMainMatches(matches, initObj);

    addMainCoords(matches, initObj);

    if (initObj.extra > 0) {
      addExtraMatches(matches, initObj);
      addExtCoords(matches, initObj);
    }

    initObj.svgArr = addSVGLines(matches, initObj);

    brktInfo = {
      ...initObj,
      matches
    };

    return brktInfo;
  }
};
