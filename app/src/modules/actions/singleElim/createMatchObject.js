//-------------------------------------------------------------------------------
//This will take main, extra, and heats total to make an object of matches
//Each match is an object which will be built out later
//-------------------------------------------------------------------------------

module.exports = function createMatchObject(init) {
  const main = init.main;
  const extra = init.extra;
  let matchesTotal = init.matchesTotal;
  let heatsTotal = init.heatsTotal;
  let increment = 1;

  let matches = {};

  //   console.log('init', init);

  for (i = heatsTotal; i > 0; i--) {
    for (j = increment; j > 0; j--) {
      matches[`match${matchesTotal}`] = {
        heat: i
      };
      matchesTotal--;
    }
    increment *= 2;
    if (increment > main / 2) {
      increment = extra;
    }
  }
  return matches;
};
