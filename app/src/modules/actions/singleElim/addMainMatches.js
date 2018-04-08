//-------------------------------------------------------------------------------
//Takes in matches object and adds player seeds
//-------------------------------------------------------------------------------

module.exports = function addMainMatches(matchObj, init) {
  const main = init.main;
  let mainArr = [];
  let inc = 2;
  let incCheck = 2;
  let matchInc = 0 + init.matchesTotal;
  let newArr = [];

  //create an array of numbers for the main
  for (i = 3; i <= main; i++) {
    mainArr.push(i);
  }

  //hardcode the first match
  matchObj[`match${init.matchesTotal}`].player1seed = 1;
  matchObj[`match${init.matchesTotal}`].player2seed = 2;
  matchObj[`match${init.matchesTotal}`].division = 'final';

  function player2Arr(increment) {
    newArr = [];
    for (j = 0; j < increment; j++) {
      newArr.push(mainArr.shift());
    }
  }

  player2Arr(inc);
  for (k = init.matchesTotal - 1; k > init.extra; k--) {
    const curr = matchObj[`match${k}`];
    const prev = matchObj[`match${matchInc}`];
    if (prev.player2seed !== '') {
      curr.player1seed = prev.player2seed;
      prev.player2seed = curr.winner;
      if (curr.player1seed == 2 || prev.division == 'lower') {
        curr.division = 'lower';
      } else {
        curr.division = 'upper';
      }
    } else {
      curr.player1seed = prev.player1seed;
      prev.player1seed = curr.winner;
      if (curr.player1seed == 2 || prev.division == 'lower') {
        curr.division = 'lower';
      } else {
        curr.division = 'upper';
      }
      matchInc--;
    }

    curr.player2seed = newArr[newArr.length - curr.player1seed];

    incCheck--;
    if (incCheck === 0) {
      inc *= 2;
      incCheck = 0 + inc;
      player2Arr(inc);
    }
  }
  return matchObj;
};
