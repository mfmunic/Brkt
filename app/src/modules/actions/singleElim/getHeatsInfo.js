//-------------------------------------------------------
//break down of which matches are in which heat
//-------------------------------------------------------
module.exports = function getHeatsInfo(main, extra, heatsTotal, matchTotal) {
  let noOfMatches = 1;
  let heats = [];

  for (i = 0; i < heatsTotal; i++) {
    let heat = {
      heat: heatsTotal - i,
      noMatch: noOfMatches,
      matches: [],
      main: false,
      extra: false
    };

    if (main / 2 == noOfMatches) {
      heat.main = true;
    }

    if (i == heatsTotal - 1 && extra > 0) {
      heat.extra = true;
      heat.noMatch = extra;
    }

    for (j = heat.noMatch; j > 0 && matchTotal > 0; j--) {
      heat.matches.push(matchTotal);
      matchTotal--;
    }

    heats.push(heat);
    noOfMatches *= 2;
  }
  return heats;
};

// module.exports = { getHeatsInfo };
