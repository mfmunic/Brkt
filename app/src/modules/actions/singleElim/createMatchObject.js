//-------------------------------------------------------------------------------
//This will take main, and heats total to make an object of matches
//Each match is an object which will be built out later
//-------------------------------------------------------------------------------

module.exports = function createMatchObject(init) {
  let heatsTotal = init.heatsTotal;
  const heat = init.heats;

  let matches = {};

  //   console.log('init', init);
  for (let i = 0; i < heatsTotal; i++) {
    for (let j = heat[i].noMatch; j > 0; j--) {
      matches[`match${heat[i].matches[j - 1]}`] = {
        heat: heat[i].heat,
        winner: '',
        loser: '',
        match: heat[i].matches[j - 1]
      };
    }
  }
  return matches;
};
