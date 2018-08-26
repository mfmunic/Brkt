//-------------------------------------------------------------------------------
//Takes in matches object and adds extra player seeds
//-------------------------------------------------------------------------------

const _ = require('lodash');

module.exports = function addExtraMatches(matchObj, init) {
  //create two arrays one for checking against and the other the extras
  let mainArr = [];
  let extArr = [];
  let { total, main, extra } = init;
  let extMatchCt = 1;
  const mainHeatChkArr = _.find(init.heats, { main: true }).matches.sort(
    function(a, b) {
      return a - b;
    }
  );
  let mainHeatChk = mainHeatChkArr[0];

  for (let i = extra; i > 0; i--) {
    mainArr.push(main);
    extArr.unshift(total);
    main--;
    total--;
  }

  for (let j = total / 2; j > 0; j--) {
    const mainMatch = matchObj[`match${mainHeatChk}`];
    for (let k = 1; k <= 2; k++) {
      const extMatch = matchObj[`match${extMatchCt}`];
      if (mainArr.includes(mainMatch[`player${k}seed`])) {
        const arrPos = mainArr.indexOf(mainMatch[`player${k}seed`]);
        mainMatch[`player${k}seed`] = '';
        mainMatch.getFrom = extMatchCt;
        extMatch.player1seed = mainArr[arrPos];
        extMatch.player2seed = extArr[arrPos];
        extMatch.division = mainMatch.division;
        extMatch.main = false;
        extMatch.goesTo = mainHeatChk;
        extMatch.goesToPos = 'upper';
        if (k === 2) {
          extMatch.goesToPos = 'lower';
        }
        extMatchCt++;
      }
    }
    mainHeatChk++;
  }

  return matchObj;
};
