// const _ = require('lodash');
const getHeatsInfo = require('./getHeatsInfo');
const createHeatsArray = require('./createHeatsArray');
const createMainArray = require('./createMainArray');
const addMainMatches = require('./addMainMatches');
const createMatchObject = require('./createMatchObject');
const createInitObj = require('./createInitObj');

module.exports = function getBrktInfo(seeds) {
  const initObj = createInitObj(seeds);

  initObj.heats = getHeatsInfo(initObj);

  const matches = createMatchObject(initObj);
  addMainMatches(matches, initObj);

  //TODO: addExtraMatches

  //TODO: createBox

  //TODO: addCoordinates

  //TODO: addSVGlines

  const brktInfo = {
    ...initObj,
    matches
  };

  return brktInfo;
};
