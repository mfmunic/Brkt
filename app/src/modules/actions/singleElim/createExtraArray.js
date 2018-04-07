//-------------------------------------------------------------------------------
//This will take the main array and the extra number and create the extra array
//of objects and augment the main array of objects
//-------------------------------------------------------------------------------

module.exports = function createExtraArray(mainArr, extra) {
  let extraArr = [];
  let upperExtraDiv = [];
  let lowerExtraDiv = [];
  const main = mainArr.length * 2;
  //create an array of numbers for extra array
  for (i = extra + main; i > main; i--) {
    extraArr.unshift(i);
  }

  for (i = 1; i <= extraArr.length; i++) {
    let newObj = {
      player1: '',
      player2: '',
      round: i
    };
    _.map(mainArr, match => {
      if (match.player1 === main) {
        newObj.player1 = match.player1;
        newObj.player2 = extraArr.shift();

        if (match.division === 'upper') {
          newObj.division = 'upper';
        } else {
          newObj.division = 'lower';
        }

        //TODO: figure out how to make the winner of previous round the name of this player auto
        //possibly remove array
        match.player1 = '';
      }
    });
  }
  console.log(extraArr);
  return (finalobj = {
    upperMainDiv,
    lowerMainDiv,
    extraArr
  });
  // for (i = extra; i > 0; i--) {
  //   let round = {
  //     match: match,
  //     Player1: 'something'
  //   };
  //   match++;
  // }
};
