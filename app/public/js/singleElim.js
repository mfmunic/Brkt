//Default testing to 31
$(document).ready(function(){
	var testNo = 10
	var testBracket = createBracketObject(testNo)

	createBracketImage(testBracket.info)
	// createCol(testBracket)
})

$("#createBtn").on("click", function (){
	$(".brktWindow").empty()
	//number of contestants
	var nCont = parseInt($("#noOfCont").val().trim());

	var bracket = createBracketObject(nCont)

	createBracketImage(bracket.info)
	
})



//-------------------------------------------------
//use the object created to create bracket
//-------------------------------------------------
function createBracketImage(bracket){
	console.log(bracket)
	$(".brktWindow").append("<div class=brktBox>")
	$(".brktBox").css("width", bracket.brktBox.width+"px")
	$(".brktBox").css("height", bracket.brktBox.height+"px")

	for (i = 0; i < bracket.heatsTotal; i++){
		for (j = 0; j < bracket.heats[i].noMatch; j++){
			var mtch = bracket.heats[i].matches[j]

			$(".brktBox").append("<div class=match id=match"+mtch.matchNo+"></div>")

			$("#match"+mtch.matchNo).css("left", mtch.xLoc+"px")
			$("#match"+mtch.matchNo).css("top", mtch.yLoc+"px")

			$("#match"+mtch.matchNo).append("<div class=play1 id=p"+i+"-"+j+">")

			$("#p"+i+"-"+j).append("<div class=seed1 id=sd1-"+j+">"+mtch.player1+"</div>")
			$("#p"+i+"-"+j).append("<div class=name1 id=nm1-"+j+"></div>")
			$("#p"+i+"-"+j).append("<div class=score1 id=sc1-"+j+"></div>")

			$("#match"+mtch.matchNo).append("<div class=play2 id=2p"+i+"-"+j+">")

			$("#2p"+i+"-"+j).append("<div class=seed2 id=sd2-"+j+">"+mtch.player2+"</div>")
			$("#2p"+i+"-"+j).append("<div class=name2 id=nm2-"+j+"></div>")
			$("#2p"+i+"-"+j).append("<div class=score2 id=sc2-"+j+"></div>")
		}
	}

	for (i = 0; i < bracket.lineCoords.length; i++){
		$(".brktBox").append("<div class=hLine id=h"+i+">")
		//classic place holder
		var pch = bracket.lineCoords[i];
		$("#h"+i).css("top", pch.sHorY);
		$("#h"+i).css("left", pch.sHorX);
		$("#h"+i).css("width", pch.width);

		$(".brktBox").append("<div class=vLine id=vl"+i+">")
		//classic place holder
		var pch = bracket.lineCoords[i];
		$("#vl"+i).css("top", pch.vertY);
		$("#vl"+i).css("left", pch.vertX);
		$("#vl"+i).css("height", pch.height);

		$(".brktBox").append("<div class=hLine id=hl"+i+">")
		//classic place holder
		var pch = bracket.lineCoords[i];
		$("#hl"+i).css("top", pch.eHorY);
		$("#hl"+i).css("left", pch.eHorX);
		$("#hl"+i).css("width", pch.width);
	}
}


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

	var rndWid = 200
	var svgWid = 10
	var rndHgt = 55

	//calling this variable bow to locate the heat that is considered main for later use
	var mainCol

	var box = findBox(bracket.heatsTotal, bracket.main, bracket.extra)
	bracket.brktBox = box

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

	bracket.lineCoords = []

	//first round is required by law and seeds the next for loop
	var round = {
		"matchNo" : bracket.heats[0].matches[0],
		"player1" : 1,
		"player2" : 2,
		"winner" : "",
		"xLoc" : box.width - rndWid,
		"yLoc" : (box.height / 2) - (rndHgt/2)
	}

	bracket.heats[0].matches[0] = round

	//loop to create rounds
	//starts with current heat and builds rounds for next heat
	for (i = 0; i < bracket.heatsTotal-(bracket.extra > 0 ? 2 : 1); i++){
		//placeholder for next loop
		var roundPH = 0;

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

			//xy coord for main first extra second the middle last
			if (bracket.heats[i+1].main == true){
				bracket.heats[i+1].matches[roundPH].xLoc = (bracket.heats[i+1].heat - 1) * (rndWid+svgWid);
				bracket.heats[i+1].matches[roundPH].yLoc = ((box.height/(bracket.heats[i+1].noMatch)) * (roundPH + 1)) - rndHgt;
				mainCol = i
			}

			//need to capture next match for current round
			bracket.heats[i].matches[j].player1 = bracket.heats[i+1].matches[roundPH].winner
			//place holder text for building
			//delete later
			// bracket.heats[i].matches[j].player1 = "Winner of match "+bracket.heats[i+1].matches[roundPH].matchNo

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

			//xy coord for main first extra second the middle last
			if (bracket.heats[i+1].main == true){
				bracket.heats[i+1].matches[roundPH].xLoc = (bracket.heats[i+1].heat - 1) * (rndWid+svgWid);
				bracket.heats[i+1].matches[roundPH].yLoc = ((box.height/(bracket.heats[i+1].noMatch)) * (roundPH + 1)) - rndHgt;
			}


			bracket.heats[i].matches[j].player2 = bracket.heats[i+1].matches[roundPH].winner
			//place holder text for building
			//delete later
			// bracket.heats[i].matches[j].player2 = "Winner of match "+bracket.heats[i+1].matches[roundPH].matchNo

			roundPH++
		}
	}// ends the loop for main rounds




	//------------------------------------------------------------------------------------
	//need another loop to give xy coord to middle heats
	//btw this is where I use var mainCol 
	//mainCol is already the main heat number - 1
	//------------------------------------------------------------------------------------

	for (i = mainCol; i >= 0; i--){
		//h is a placeholder variable for next loop like j
		var h = 0
		for (j = 0; j < bracket.heats[i].noMatch; j++){

			bracket.heats[i].matches[j].xLoc = (bracket.heats[i].heat - 1) * (rndWid+svgWid)
			bracket.heats[i].matches[j].yLoc = (bracket.heats[i+1].matches[h].yLoc + bracket.heats[i+1].matches[h+1].yLoc) / 2

			// create path for 3 divs
			var svgObj = {
				"sHorX" : bracket.heats[i].matches[j].xLoc - (svgWid),
				"sHorY" : bracket.heats[i+1].matches[h].yLoc + (rndHgt/2),
				"width" : svgWid/2,
				"vertX" : bracket.heats[i].matches[j].xLoc - (svgWid/2),
				"vertY" : bracket.heats[i+1].matches[h].yLoc + (rndHgt/2),
				"height" : Math.abs((bracket.heats[i+1].matches[h].yLoc + (rndHgt/2))-(bracket.heats[i].matches[j].yLoc + (rndHgt/2))),
				"eHorX" : bracket.heats[i].matches[j].xLoc - (svgWid/2),
				"eHorY" : bracket.heats[i].matches[j].yLoc + (rndHgt/2)
			}

			bracket.lineCoords.push(svgObj)

			h++

			var svgObj = {
				"sHorX" : bracket.heats[i].matches[j].xLoc - (svgWid),
				"sHorY" : bracket.heats[i+1].matches[h].yLoc + (rndHgt/2),
				"width" : svgWid/2,
				"vertX" : bracket.heats[i].matches[j].xLoc - (svgWid/2),
				"vertY" : bracket.heats[i].matches[j].yLoc + (rndHgt/2),
				"height" : Math.abs((bracket.heats[i+1].matches[h].yLoc + (rndHgt/2))-(bracket.heats[i].matches[j].yLoc + (rndHgt/2)))+2,
				"eHorX" : bracket.heats[i].matches[j].xLoc - (svgWid/2),
				"eHorY" : bracket.heats[i].matches[j].yLoc + (rndHgt/2)
			}

			bracket.lineCoords.push(svgObj)

			h++
		}
	}





	

	//----------------------------------------------------------------------------------
	//loop to create pre-heat and extra rounds
	//starts with main loop; finds the largest number and creates a round in the preheat
	//----------------------------------------------------------------------------------
	var preHeat = bracket.heats[bracket.heatsTotal-1]
	var mainHeat = bracket.heats[bracket.heatsTotal-2]

	var extVs = bracket.main
	for (i = 0; i < extArr.length; i++){
		//extVs is the largest main number available
		

		//search through main to find extVs number then manipulate that round and create extra round
		for (j = 0; j < mainHeat.noMatch; j++){
			if (mainHeat.matches[j].player1 == extVs){
				var extWin = preHeat.matches[i]
				preHeat.matches[i] = {
					"matchNo" : preHeat.matches[i],
					"player1" : mainHeat.matches[j].player1,
					"player2" : extArr[i],
					"winner" : "",
					"xLoc" : mainHeat.matches[j].xLoc - 210,
					"yLoc" : mainHeat.matches[j].yLoc - (rndHgt/2)
				}

				var svgObj = {
					"sHorX" : mainHeat.matches[j].xLoc - (svgWid/2),
					"sHorY" : mainHeat.matches[j].yLoc + (rndHgt/2),
					"width" : svgWid/2,
					"vertX" : mainHeat.matches[j].xLoc - (svgWid/2),
					"vertY" : preHeat.matches[i].yLoc + (rndHgt/2),
					"height" : Math.abs((mainHeat.matches[j].yLoc + (rndHgt/2))-(preHeat.matches[i].yLoc + (rndHgt/2)))+2,
					"eHorX" : preHeat.matches[i].xLoc + rndWid,
					"eHorY" : preHeat.matches[i].yLoc + (rndHgt/2)
				}

				bracket.lineCoords.push(svgObj)
				
				mainHeat.matches[j].player1 = preHeat.matches[i].winner
				//place holder text for building
				//delete later
				// mainHeat.matches[j].player1 = "Winner of match "+preHeat.matches[i].matchNo
				break;
			}

			if (mainHeat.matches[j].player2 == extVs){
				var extWin = preHeat.matches[i]
				preHeat.matches[i] = {
					"matchNo" : preHeat.matches[i],
					"player1" : mainHeat.matches[j].player2,
					"player2" : extArr[i],
					"winner" : "",
					"xLoc" : mainHeat.matches[j].xLoc - 210,
					"yLoc" : mainHeat.matches[j].yLoc + (rndHgt/2)
				}
				
				var svgObj = {
					"sHorX" : mainHeat.matches[j].xLoc - (svgWid/2),
					"sHorY" : mainHeat.matches[j].yLoc + (rndHgt/2),
					"width" : svgWid/2,
					"vertX" : mainHeat.matches[j].xLoc - (svgWid/2),
					"vertY" : mainHeat.matches[j].yLoc + (rndHgt/2),
					"height" : Math.abs((mainHeat.matches[j].yLoc + (rndHgt/2))-(preHeat.matches[i].yLoc + (rndHgt/2)))+2,
					"eHorX" : preHeat.matches[i].xLoc + rndWid,
					"eHorY" : preHeat.matches[i].yLoc + (rndHgt/2)
				}

				bracket.lineCoords.push(svgObj)
				mainHeat.matches[j].player2 = preHeat.matches[i].winner
				//place holder text for building
				//delete later
				// mainHeat.matches[j].player2 = "Winner of match "+preHeat.matches[i].matchNo
				break;
			}
		}
		extVs--;
	}

}




//-------------------------------------------------------
//create the box that bracket will be built in
//-------------------------------------------------------
function findBox (heats, main, extra){

	//for now calling the width of each round 200px height 50px
	//width of lines 10px;
	//subject to change
	var rndWid = 200
	var rndHgt = 55
	var svgWid = 10

	var width = (heats * rndWid) + ((heats-1)*svgWid)
	var height = (main/2 * rndHgt) + (rndHgt*1.5)

	
	if (extra > main/2){
		height = (main * rndHgt)
	}

	var box = {
		"width" : width,
		"height" : height
	}

	return box
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
