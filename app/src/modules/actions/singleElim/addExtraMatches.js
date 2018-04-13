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
    extArr.unshift(parseInt(total, 10));
    main--;
    total--;
  }
  console.log('mainArr', mainArr);
  console.log('extArr', extArr);

  _.forEach(extArr, (extraElem, index) => {
    console.log(extraElem);
    console.log('index', index);
    // const match = matchObj[`match${mainHeatChk}`];
    const extMatch = matchObj[`match${index + 1}`];
    // console.log('match', match);
    _.map(matchObj, match => {
      if (match.heat === 2) {
        if (mainArr.includes(match.player1seed)) {
          console.log('match.player1seed', match.player1seed);

          const arrPos = mainArr.indexOf(match.player1seed);
          match.player1seed = '';
          match.getFrom = extMatchCt;
          extMatch.player1seed = mainArr[arrPos];
          extMatch.player2seed = extArr[arrPos];
          extMatch.division = match.division;
          extMatch.main = false;
          extMatch.goesTo = mainHeatChk;
          extMatch.goesToPos = 'upper';
          // extMatchCt++;
        }
        if (mainArr.includes(match.player2seed)) {
          console.log('match.player2seed', match.player2seed);

          const arrPos = mainArr.indexOf(match.player2seed);
          match.player2seed = '';
          match.getFrom = extMatchCt;
          extMatch.player1seed = mainArr[arrPos];
          extMatch.player2seed = extArr[arrPos];
          extMatch.division = match.division;
          extMatch.main = false;
          extMatch.goesTo = mainHeatChk;
          extMatch.goesToPos = 'lower';
          // mainHeatChk++;
          // extMatchCt++;
        }
      }
    });
  });

  return matchObj;
};
