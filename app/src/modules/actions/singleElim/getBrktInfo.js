// const _ = require('lodash');
const getHeatsInfo = require('./getHeatsInfo');
const addMainMatches = require('./addMainMatches');
const createMatchObject = require('./createMatchObject');
const createInitObj = require('./createInitObj');
const addExtraMatches = require('./addExtraMatches');
const createBox = require('./createBox');
const addMainCoords = require('./addMainCoords');

module.exports = function getBrktInfo(seeds) {
  const initObj = createInitObj(seeds);

  initObj.heats = getHeatsInfo(initObj);

  const matches = createMatchObject(initObj);
  addMainMatches(matches, initObj);

  if (initObj.extra > 0) {
    addExtraMatches(matches, initObj);
  }

  initObj.box = createBox(initObj);

  addMainCoords(matches, initObj);

  //TODO: addExtraCoordinates

  //TODO: addSVGlines

  const brktInfo = {
    ...initObj,
    matches
  };

  return brktInfo;
};
