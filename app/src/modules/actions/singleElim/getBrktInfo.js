// const _ = require('lodash');
const getHeatsInfo = require('./getHeatsInfo');
const createHeatsArray = require('./createHeatsArray');
const createMainArray = require('./createMainArray');
const addMainMatches = require('./addMainMatches');
const createMatchObject = require('./createMatchObject');
const createInitObj = require('./createInitObj');
// const convertArrayToObjects = require('./convertArrayToObjects');

module.exports = function getBrktInfo(seeds) {
  const initObj = createInitObj(seeds);

  const matches = createMatchObject(initObj);
  const mainArr = addMainMatches(matches, initObj);

  // const brktInfo = {
  //   heatsTotal: heatsTotal,
  //   main: main,
  //   matchesTotal: seeds - 1
  //   // heats: getHeatsInfo(main, extra, heatsTotal, seeds - 1)
  // };

  const brktInfo = {
    initObj,
    matches,
    mainArr
  };

  // const heatArr = createHeatsArray(brktInfo);

  return brktInfo;
};
