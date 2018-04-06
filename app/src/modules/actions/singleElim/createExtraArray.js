//-------------------------------------------------------------------------------
//This will take the main array and the extra number and create the extra array
//of objects and augment the main array of objects
//-------------------------------------------------------------------------------

module.exports = function createExtraArray(mainArr, extra) {
  let extraArr = [];
  let upperExtraDiv = [];
  let lowerExtraDiv = [];
  const main = mainArr.length * 2;
  const total = main + extra;
  //create an array of numbers for extra array
  for (i = extra + main; i > main; i--) {
    extraArr.unshift(i);
  }

  for (i = 0; i < extraArr.length; i++) {
    _.map(mainArr, match => {
      if (match.player1 === total) {
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
