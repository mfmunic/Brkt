const findBox = require('./createBox.js');

//-------------------------------------------------------
//create the matches for the bracket
//an array of objects
//-------------------------------------------------------
function createMatches(bracket) {
  //calling this variable now to locate the heat that is considered main for later use
  let mainCol;

  const box = findBox(bracket.heatsTotal, bracket.main, bracket.extra);
  bracket.brktBox = box;

  //referenced in findBox()
  const rndWid = bracket.brktBox.rndWid;
  const svgWid = bracket.brktBox.svgWid;
  const rndHgt = bracket.brktBox.rndHgt;

  //create the array necessary to find the rounds
  let mainArr = [];

  for (i = 1; i <= bracket.main; i++) {
    mainArr.push(i);
  }

  //that was main this is extra
  var seeds = bracket.extra + bracket.main;
  var extArr = [];

  for (i = bracket.main + 1; i <= seeds; i++) {
    extArr.push(i);
  }

  bracket.lineCoords = [];

  //first round is required by law and seeds the next for loop
  var round = {
    matchNo: bracket.heats[0].matches[0],
    player1: 1,
    player2: 2,
    winner: '',
    xLoc: box.width - rndWid,
    yLoc: box.height / 2 - rndHgt / 2
  };

  bracket.heats[0].matches[0] = round;

  //loop to create rounds
  //starts with current heat and builds rounds for next heat
  for (i = 0; i < bracket.heatsTotal - (bracket.extra > 0 ? 2 : 1); i++) {
    //placeholder for next loop
    var roundPH = 0;

    //this is all to find player2 for every object
    var mainRange = bracket.heats[i + 1].noMatch * 2;

    for (j = 0; j < bracket.heats[i].noMatch; j++) {
      var nextMatch = bracket.heats[i + 1].matches[roundPH];
      var play1Loc = mainArr.indexOf(bracket.heats[i].matches[j].player1);
      var play2Loc = mainRange - 1 - play1Loc;

      //creates next heat bracket
      bracket.heats[i + 1].matches[roundPH] = {
        matchNo: nextMatch,
        player1: bracket.heats[i].matches[j].player1,
        player2: mainArr[play2Loc],
        winner: ''
      };

      //xy coord for main first extra second the middle last
      if (bracket.heats[i + 1].main == true) {
        bracket.heats[i + 1].matches[roundPH].xLoc =
          (bracket.heats[i + 1].heat - 1) * (rndWid + svgWid);
        if (bracket.extra >= bracket.main / 2) {
          bracket.heats[i + 1].matches[roundPH].yLoc =
            box.height / bracket.heats[i + 1].noMatch * (roundPH + 1) -
            rndHgt * 1.5;
        } else {
          bracket.heats[i + 1].matches[roundPH].yLoc =
            box.height / bracket.heats[i + 1].noMatch * (roundPH + 1) - rndHgt;
        }

        mainCol = i;
      }

      //need to capture next match for current round
      bracket.heats[i].matches[j].player1 =
        bracket.heats[i + 1].matches[roundPH].winner;
      //place holder text for building
      //delete later
      // bracket.heats[i].matches[j].player1 = "Winner of match "+bracket.heats[i+1].matches[roundPH].matchNo

      roundPH++;

      nextMatch = bracket.heats[i + 1].matches[roundPH];
      var play1Loc = mainArr.indexOf(bracket.heats[i].matches[j].player2);
      var play2Loc = mainRange - 1 - play1Loc;

      bracket.heats[i + 1].matches[roundPH] = {
        matchNo: nextMatch,
        player1: bracket.heats[i].matches[j].player2,
        player2: mainArr[play2Loc],
        winner: ''
      };

      //xy coord for main first extra second the middle last
      if (bracket.heats[i + 1].main == true) {
        bracket.heats[i + 1].matches[roundPH].xLoc =
          (bracket.heats[i + 1].heat - 1) * (rndWid + svgWid);
        if (bracket.extra >= bracket.main / 2) {
          bracket.heats[i + 1].matches[roundPH].yLoc =
            box.height / bracket.heats[i + 1].noMatch * (roundPH + 1) -
            rndHgt * 1.5;
        } else {
          bracket.heats[i + 1].matches[roundPH].yLoc =
            box.height / bracket.heats[i + 1].noMatch * (roundPH + 1) - rndHgt;
        }
      }

      bracket.heats[i].matches[j].player2 =
        bracket.heats[i + 1].matches[roundPH].winner;
      //place holder text for building
      //delete later
      // bracket.heats[i].matches[j].player2 = "Winner of match "+bracket.heats[i+1].matches[roundPH].matchNo

      roundPH++;
    }
  } // ends the loop for main rounds

  //------------------------------------------------------------------------------------
  //need another loop to give xy coord to middle heats
  //btw this is where I use var mainCol
  //mainCol is already the main heat number - 1
  //------------------------------------------------------------------------------------

  for (i = mainCol; i >= 0; i--) {
    //h is a placeholder variable for next loop like j
    var h = 0;
    for (j = 0; j < bracket.heats[i].noMatch; j++) {
      bracket.heats[i].matches[j].xLoc =
        (bracket.heats[i].heat - 1) * (rndWid + svgWid);
      bracket.heats[i].matches[j].yLoc =
        (bracket.heats[i + 1].matches[h].yLoc +
          bracket.heats[i + 1].matches[h + 1].yLoc) /
        2;

      //upper connector
      var svgObj = {
        // position 1
        pt1x: bracket.heats[i].matches[j].xLoc - svgWid,
        pt1y: bracket.heats[i + 1].matches[h].yLoc + rndHgt / 2 - 2,

        //postion 2
        pt2x: bracket.heats[i].matches[j].xLoc - svgWid / 2,
        pt2y: bracket.heats[i + 1].matches[h].yLoc + rndHgt / 2 - 2,

        // postion 3
        pt3x: bracket.heats[i].matches[j].xLoc - svgWid / 2,
        pt3y: bracket.heats[i].matches[j].yLoc + rndHgt * 0.25 - 2,

        // postion 4
        pt4x: bracket.heats[i].matches[j].xLoc,
        pt4y: bracket.heats[i].matches[j].yLoc + rndHgt * 0.25 - 2
      };

      bracket.lineCoords.push(svgObj);

      h++;

      //lower connector
      var svgObj = {
        // postion 1
        pt1x: bracket.heats[i].matches[j].xLoc - svgWid,
        pt1y: bracket.heats[i + 1].matches[h].yLoc + rndHgt / 2 - 2,

        // position 2
        pt2x: bracket.heats[i].matches[j].xLoc - svgWid / 2,
        pt2y: bracket.heats[i + 1].matches[h].yLoc + rndHgt / 2 - 2,

        // position 3
        pt3x: bracket.heats[i].matches[j].xLoc - svgWid / 2,
        pt3y: bracket.heats[i].matches[j].yLoc + rndHgt * 0.75 - 2,

        // position 4
        pt4x: bracket.heats[i].matches[j].xLoc,
        pt4y: bracket.heats[i].matches[j].yLoc + rndHgt * 0.75 - 2
      };

      bracket.lineCoords.push(svgObj);

      h++;
    }
  }

  //----------------------------------------------------------------------------------
  //loop to create pre-heat and extra rounds
  //starts with main loop; finds the largest number and creates a round in the preheat
  //----------------------------------------------------------------------------------
  var preHeat = bracket.heats[bracket.heatsTotal - 1];
  var mainHeat = bracket.heats[bracket.heatsTotal - 2];

  var extVs = bracket.main;
  for (i = 0; i < extArr.length; i++) {
    //extVs is the largest main number available

    //search through main to find extVs number then manipulate that round and create extra round
    for (j = 0; j < mainHeat.noMatch; j++) {
      if (mainHeat.matches[j].player1 == extVs) {
        preHeat.matches[i] = {
          matchNo: preHeat.matches[i],
          player1: mainHeat.matches[j].player1,
          player2: extArr[i],
          winner: '',
          xLoc: mainHeat.matches[j].xLoc - (rndWid + svgWid),
          yLoc: mainHeat.matches[j].yLoc - rndHgt / 2
        };

        var svgObj = {
          // postion 1
          pt1x: mainHeat.matches[j].xLoc,
          pt1y: mainHeat.matches[j].yLoc + rndHgt / 4,

          // position 2
          pt2x: mainHeat.matches[j].xLoc - svgWid / 2,
          pt2y: mainHeat.matches[j].yLoc + rndHgt / 4,

          // position 3
          pt3x: mainHeat.matches[j].xLoc - svgWid / 2,
          pt3y: preHeat.matches[i].yLoc + rndHgt / 2 - 2,

          // position 4
          pt4x: preHeat.matches[i].xLoc + rndWid,
          pt4y: preHeat.matches[i].yLoc + rndHgt / 2 - 2
        };

        bracket.lineCoords.push(svgObj);

        mainHeat.matches[j].player1 = preHeat.matches[i].winner;
        //place holder text for building
        //delete later
        // mainHeat.matches[j].player1 = "Winner of match "+preHeat.matches[i].matchNo
        break;
      }

      if (mainHeat.matches[j].player2 == extVs) {
        preHeat.matches[i] = {
          matchNo: preHeat.matches[i],
          player1: mainHeat.matches[j].player2,
          player2: extArr[i],
          winner: '',
          xLoc: mainHeat.matches[j].xLoc - (rndWid + svgWid),
          yLoc: mainHeat.matches[j].yLoc + rndHgt / 2
        };

        var svgObj = {
          // postion 1
          pt1x: mainHeat.matches[j].xLoc,
          pt1y: mainHeat.matches[j].yLoc + rndHgt * 0.75 - 3,

          // position 2
          pt2x: mainHeat.matches[j].xLoc - svgWid / 2,
          pt2y: mainHeat.matches[j].yLoc + rndHgt * 0.75 - 3,

          // position 3
          pt3x: mainHeat.matches[j].xLoc - svgWid / 2,
          pt3y: preHeat.matches[i].yLoc + rndHgt / 2 - 2,

          // position 4
          pt4x: preHeat.matches[i].xLoc + rndWid,
          pt4y: preHeat.matches[i].yLoc + rndHgt / 2 - 2,

          //top horizontal div
          sHorX: mainHeat.matches[j].xLoc - svgWid / 2,
          sHorY: mainHeat.matches[j].yLoc + rndHgt * 0.75 - 4,
          width: svgWid / 2 + 2,
          //vertical div
          vertX: mainHeat.matches[j].xLoc - svgWid / 2,
          vertY: mainHeat.matches[j].yLoc + rndHgt * 0.75 - 3,
          height:
            Math.abs(mainHeat.matches[j].yLoc - preHeat.matches[i].yLoc) -
            rndHgt / 4 +
            2,
          //bottom horizontal div
          eHorX: preHeat.matches[i].xLoc + rndWid,
          eHorY: preHeat.matches[i].yLoc + rndHgt / 2 - 3
        };

        bracket.lineCoords.push(svgObj);
        mainHeat.matches[j].player2 = preHeat.matches[i].winner;
        //place holder text for building
        //delete later
        // mainHeat.matches[j].player2 = "Winner of match "+preHeat.matches[i].matchNo
        break;
      }
    }
    extVs--;
  }
}
