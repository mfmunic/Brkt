// const _ = require('lodash');
const getHeatsInfo = require('./getHeatsInfo');
const addMainMatches = require('./addMainMatches');
const createMatchObject = require('./createMatchObject');
const createInitObj = require('./createInitObj');
const addExtraMatches = require('./addExtraMatches');
const createBox = require('./createBox');
const addMainCoords = require('./addMainCoords');
const addExtCoords = require('./addExtCoords');
const addSVGLines = require('./addSVGLines');

module.exports = function getBrktInfo(seeds) {
  let brktInfo = { box: {} };
  if (seeds === 0) {
    brktInfo.box.width = 100;
    brktInfo.box.height = 100;
    return brktInfo;
  } else {
    const initObj = createInitObj(seeds);

    initObj.heats = getHeatsInfo(initObj);

    const matches = createMatchObject(initObj);
    addMainMatches(matches, initObj);

    initObj.box = createBox(initObj);

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
    console.log(brktInfo);
    return brktInfo;
  }
};
