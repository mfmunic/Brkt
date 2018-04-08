// const _ = require('lodash');
const getHeatsInfo = require('./getHeatsInfo');
const createHeatsArray = require('./createHeatsArray');
const createMainArray = require('./createMainArray');
const addMainMatches = require('./addMainMatches');
const createMatchObject = require('./createMatchObject');
const createInitObj = require('./createInitObj');
const addExtraMatches = require('./addExtraMatches');

module.exports = function getBrktInfo(seeds) {
  const initObj = createInitObj(seeds);

  initObj.heats = getHeatsInfo(initObj);

  const matches = createMatchObject(initObj);
  addMainMatches(matches, initObj);

  if (initObj.extra > 0) {
    addExtraMatches(matches, initObj);
  }

  //TODO: createBox

  //TODO: addCoordinates

  //TODO: addSVGlines

  const brktInfo = {
    ...initObj,
    matches
  };

  return brktInfo;
};
