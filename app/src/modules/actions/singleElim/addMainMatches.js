//-------------------------------------------------------------------------------
//Takes in matches object and adds player seeds
//-------------------------------------------------------------------------------

module.exports = function addMainMatches(matchObj, init) {
  const main = init.main;
  let mainArr = [];
  let inc = 2;
  let matchInc = 1;

  //create an array of numbers for the main
  for (i = 3; i <= main; i++) {
    mainArr.push(i);
  }

  //hardcode the first match
  matchObj[`match${init.matchesTotal}`].player1seed = 1;
  matchObj[`match${init.matchesTotal}`].player2seed = 2;

  for (i = init.matchesTotal - 1; i > 0; i--) {
    let newArr = [];
    console.log(matchObj);

    // for (j = 0; j < inc; j++) {
    //   newArr.push(mainArr.shift());
    // }

    if (matchObj[`match${i + matchInc}`].player2seed !== '') {
      matchObj[`match${i}`].player1seed =
        matchObj[`match${i + matchInc}`].player2seed;

      matchObj[`match${i + matchInc}`].player2seed = '';
    } else {
      matchObj[`match${i}`].player1seed =
        matchObj[`match${i + matchInc}`].player1seed;

      matchObj[`match${i + matchInc}`].player1seed = '';
    }

    matchObj[`match${i}`].player2seed = mainArr.shift();
    matchInc++;
    if (matchInc > inc) {
      matchInc = 1;
      inc *= 2;
    }
  }
  //sort main array by matches
  // for (i = 0; i < main / 2; i++) {
  //   let newArr = [];
  //   newArr.push(mainArr.shift());
  //   newArr.push(mainArr.pop());
  //   mainHeatArr.push(newArr);
  // }

  //convert the array of arrays into an array of objects
  // mainHeatArr = _.map(mainHeatArr, arr => {
  //   return {
  //     player1seed: arr[0],
  //     player2seed: arr[1]
  //   };
  // });

  // for (i = 0; i < main / 2; i++) {
  //   if (upper > 0) {
  //     mainHeatArr[i].division = 'upper';
  //     upper--;
  //   } else {
  //     mainHeatArr[i].division = 'lower';
  //     lower--;
  //     if (lower === 0) {
  //       upper = 2;
  //       lower = 2;
  //     }
  //   }
  // }

  return matchObj;
  // for (i = extra; i > 0; i--) {
  //   let round = {
  //     match: match,
  //     Player1: 'something'
  //   };
  //   match++;
  // }
};
