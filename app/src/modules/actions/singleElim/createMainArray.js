//-------------------------------------------------------------------------------
//This will take the main number and create an object with individual matches
//-------------------------------------------------------------------------------

const _ = require('lodash');
module.exports = function createMainArray(main) {
  let mainArr = [];
  let mainHeatArr = [];

  //these two numbers are for creating a repeating pattern of upper lower lower upper
  // let upper = 1;
  // let lower = 2;

  //create an array of numbers for the main
  for (i = 1; i <= main; i++) {
    mainArr.push(i);
  }

  //sort main array by matches
  // for (i = 0; i < main / 2; i++) {
  //   let newArr = [];
  //   newArr.push(mainArr.shift());
  //   newArr.push(mainArr.pop());
  //   mainHeatArr.push(newArr);
  // }

  //convert the array of arrays into an array of objects
  mainHeatArr = _.map(mainHeatArr, arr => {
    return {
      player1seed: arr[0],
      player2seed: arr[1]
    };
  });

  for (i = 0; i < main / 2; i++) {
    if (upper > 0) {
      mainHeatArr[i].division = 'upper';
      upper--;
    } else {
      mainHeatArr[i].division = 'lower';
      lower--;
      if (lower === 0) {
        upper = 2;
        lower = 2;
      }
    }
  }

  return mainHeatArr;
  // for (i = extra; i > 0; i--) {
  //   let round = {
  //     match: match,
  //     Player1: 'something'
  //   };
  //   match++;
  // }
};
