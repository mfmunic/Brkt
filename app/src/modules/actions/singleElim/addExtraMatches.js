//-------------------------------------------------------------------------------
//Takes in matches object and adds extra player seeds
//-------------------------------------------------------------------------------

const _ = require('lodash');

module.exports = function addExtraMatches(matchObj, init) {
  //create two arrays one for checking against and the other the extras
  let mainArr = [];
  let extArr = [];
  let total = init.total;
  let main = init.main;
  let extMatchCt = 1;
  const mainHeatChkArr = _.find(init.heats, { main: true }).matches.sort(
    function(a, b) {
      return a - b;
    }
  );
  let mainHeatChk = mainHeatChkArr[0];

  for (i = init.extra; i > 0; i--) {
    mainArr.push(main);
    extArr.unshift(total);
    main--;
    total--;
  }

  for (j = init.extra; j > 0; j--) {
    const mainMatch = matchObj[`match${mainHeatChk}`];
    const extMatch = matchObj[`match${extMatchCt}`];

    if (mainArr.includes(mainMatch.player1seed)) {
      const arrPos = mainArr.indexOf(mainMatch.player1seed);
      mainMatch.player1seed = '';
      mainMatch.getFrom = extMatchCt;
      extMatch.player1seed = mainArr[arrPos];
      extMatch.player2seed = extArr[arrPos];
      extMatch.division = mainMatch.division;
      extMatch.main = false;
      extMatch.goesTo = mainHeatChk;
      extMatch.goesToPos = 'upper';
      extMatchCt++;
    } else if (mainArr.includes(mainMatch.player2seed)) {
      const arrPos = mainArr.indexOf(mainMatch.player2seed);
      mainMatch.player2seed = '';
      mainMatch.getFrom = extMatchCt;
      extMatch.player1seed = mainArr[arrPos];
      extMatch.player2seed = extArr[arrPos];
      extMatch.division = mainMatch.division;
      extMatch.main = false;
      extMatch.goesTo = mainHeatChk;
      extMatch.goesToPos = 'lower';
      mainHeatChk++;
      extMatchCt++;
    } else {
      mainHeatChk++;
    }
  }

  return matchObj;
};
