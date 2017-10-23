//Default testing to 31
$(document).ready(function(){
	var testNo = 16
	var testBracket = createBracketObject(testNo)
	// createCol(testBracket)
})

$("#createBtn").on("click", function (){
	$(".brktBox").empty()
	//number of contestants
	var nCont = parseInt($("#noOfCont").val().trim());

	var bracket = createBracketObject(nCont)
})



//-------------------------------------------------
//create a bracket object to build the html and css
//-------------------------------------------------
function createBracketObject (seeds) {
	//brktInfo will be the object that is returned
	var bracket = {
		"info": getBrktInfo(seeds),
	}

	createMatches (bracket.info)

	return bracket
}



//-------------------------------------------------------
//create the matches for the bracket
//an array of objects
//-------------------------------------------------------
function createMatches (bracket) {

	//create the array necessary to find the rounds
	var mainArr = []

	for (i = 1; i<=bracket.main; i++){
		mainArr.push(i)
	}

	//that was main this is extra
	var seeds = bracket.extra+bracket.main
	var extArr = []

	for (i = bracket.main+1; i<=seeds; i++){
		extArr.push(i)
	}

	console.log(extArr)
	var round = {
		"matchNo" : bracket.heats[0].matches[0],
		"player1" : 1,
		"player2" : 2,
		"winner" : ""
	}

	bracket.heats[0].matches[0] = round

	//placeholder for next loop
	var roundPH = 0;

	//loop to create rounds
	for (i = 0; i < bracket.heatsTotal-1; i++){
		//this is all to find player2 for every object
		var mainRange = bracket.heats[i+1].noMatch*2

		for (j = 0; j < bracket.heats[i].noMatch; j++){
			var nextMatch = bracket.heats[i+1].matches[roundPH]
			var play1Loc = mainArr.indexOf(bracket.heats[i].matches[j].player1)
			var play2Loc = mainRange-1-play1Loc

			//creates next heat bracket
			bracket.heats[i+1].matches[roundPH] = {
				"matchNo" : nextMatch,
				"player1" : bracket.heats[i].matches[j].player1,
				"player2" : mainArr[play2Loc],
				"winner" : ""
			}

			//need to capture next match for current round
			bracket.heats[i].matches[j].player1 = bracket.heats[i+1].matches[roundPH].winner
			//place holder text for building
			//delete later
			bracket.heats[i].matches[j].player1 = "Winner of match "+bracket.heats[i+1].matches[roundPH].matchNo

			roundPH++

			nextMatch = bracket.heats[i+1].matches[roundPH]
			var play1Loc = mainArr.indexOf(bracket.heats[i].matches[j].player2)
			var play2Loc = mainRange-1-play1Loc

			bracket.heats[i+1].matches[roundPH] = {
				"matchNo" : nextMatch,
				"player1" : bracket.heats[i].matches[j].player2,
				"player2" : mainArr[play2Loc],
				"winner" : ""
			}


			bracket.heats[i].matches[j].player2 = bracket.heats[i+1].matches[roundPH].winner
			//place holder text for building
			//delete later
			bracket.heats[i].matches[j].player2 = "Winner of match "+bracket.heats[i+1].matches[roundPH].matchNo

			roundPH++
		}
	}// ends the loop for main rounds

	var preHeat = bracket.heats[bracket.heatsTotal-1]
	var mainHeat = bracket.heats[bracket.heatsTotal-2]
	console.log(preHeat)

	//-----------------------------------------------------
	//loop to create pre-heat and extra rounds
	for (i = 0; i < extArr.lenth; i++){

		var extVs = bracket.main
		for (j = 0; j < mainHeat.noMatch; j++){
			if (mainHeat.matches[j].player1 == extVs){
				// preHeat.matches[]
			}
		}

	}
	console.log(bracket)
}




//-------------------------------------------------------
//start with basic bracket info based on size of bracket
//-------------------------------------------------------
function getBrktInfo (seeds) {

	// main is the number of contestants for the first full heat
	var main = 0;

	//extra is the number of contestants that need to qualify for the first full heat
	var extra = 0;

	var heatsTotal = 0;

	//determine the number of heats (columns)
	for (i = 1; i <= seeds; i *= 2){
		if (i * 2 <= seeds){
			main = i * 2;
			heatsTotal++
		} else {
			extra = seeds - main
		}
	}

	if (extra > 0){
		heatsTotal++
	}

	var brktInfo = {
		"heatsTotal" : heatsTotal,
		"main" : main,
		"extra" : extra,
		"matchesTotal" : seeds-1,
		"heats" : getHeatsInfo(main, extra, heatsTotal, seeds-1)
	}

	return brktInfo
}

//-------------------------------------------------------
//break down of which matches are in which heat
//-------------------------------------------------------
function getHeatsInfo(main, extra, heatsTot, mtchTot){
	noOfMatches = 1

	//ph stands for place holder
	matchPH = mtchTot

	heats = []
 
	for (i = heatsTot; i > 0; i--){

		var matches = []

		for(j = noOfMatches; j > 0 && matchPH > 0; j--){
			matches.push(matchPH)
			matchPH--
		}

		matches.sort(function(a, b) {
  			return a - b;
		});

		var heat = {
			"heat" : i,
			"noMatch" : matches.length,
			"matches" : matches
		}

		if (main/2 == noOfMatches){
			heat.main = true;
		}

		if (i == 1 && extra > 0){
			heat.extra = true;
		}

		heats.push(heat)
		noOfMatches *= 2
	}

	return heats
}
