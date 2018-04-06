// const _ = require('lodash');
const getHeatsInfo = require('./getHeatsInfo');
const createHeatsArray = require('./createHeatsArray');
const createMainArray = require('./createMainArray');
const convertArrayToObjects = require('./convertArrayToObjects');

module.exports = function getBrktInfo(seeds) {
  // main is the number of players for the first full heat
  let main = 0;

  //extra is the number of matches in the extra pre-heat
  let extra = 0;

  let heatsTotal = 0;

  //determine the number of heats (columns)
  for (i = 1; i <= seeds; i *= 2) {
    if (i * 2 <= seeds) {
      main = i * 2;
      heatsTotal++;
    } else {
      extra = seeds - main;
    }
  }

  if (extra > 0) {
    heatsTotal++;
  }

  const mainArr = createMainArray(main);

  const brktInfo = {
    heatsTotal: heatsTotal,
    main: main,
    matchesTotal: seeds - 1
    // heats: getHeatsInfo(main, extra, heatsTotal, seeds - 1)
  };

  const heatArr = createHeatsArray(brktInfo);

  return brktInfo;
};
