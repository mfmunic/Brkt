//Default testing to 31
$(document).ready(function(){
	var testNo = 31
	var testBracket = createBracketObject(testNo)
	console.log(testBracket)
	createCol(testBracket)
})

$("#createBtn").on("click", function (){
	$(".brktBox").empty()
	//number of contestants
	var nCont = parseInt($("#noOfCont").val().trim());

	var bracket = createBracketObject(nCont)
	console.log(bracket)

	createCol(bracket)
})




// -------------------------------------------------------------------------------------------------------------
// Create an object that returns number of heats (columns), number of rounds, breaks down rounds and contestants
//--------------------------------------------------------------------------------------------------------------

function createBracketObject(contestants){

	//brktInfo will be the object that is returned
	var brktInfo = {
		"total": contestants,
		"heatsTotal": -1,
		"roundsTotal": contestants-1,
		"rounds" : [],
		"heats": []
	}

	// main is the number of contestants for the first full heat
	var main = 0;

	//extra is the number of contestants that need to qualify for the first full heat
	var extra = 0;

	//determine the number of heats (columns)
	for (a = 1; a <= contestants; a *= 2){
		if (a * 2 <= contestants){
			main = a * 2;
		} else {
			extra = contestants - main
		}
		brktInfo.heatsTotal++
	}

	if (extra > 0){
		brktInfo.heatsTotal++
	}

	//mainColumn is the first full heat
	//extra rounds will need to be played first to fill out the first heat
	//the number of extra needs to pull from the main to fill out correctly
	var mainColumn = main - extra

	//blanks are the rounds in the first heat that require a winner from a pre-heat round
	var blanks = extra

	//extra needs to pull from main to have somebody to compete with
	extra *= 2

	//mainArr is total of each contestant for first heat
	var mainArr = []

	//1st and 2nd seats need to start on opposite branches
	//1st seat starts on left
	var mainArrLeft = []
	//2nd seat starts on right
	//determine later if actually display left and right 
	var mainArrRight = []

	// extArr is total for pre-heat
	var extArr = []
	var extArrLeft = []
	var extArrRight = []

	var blanksLeft = 0;
	var blanksRight = 0;
	var extLoop = 0 

	//reference for creating rounds
	var totalPlayArr = [];

	//fill out mainArr
	for (b = 0; b < main; b++){

		if (blanks > 0){
			mainArr.unshift("");
			blanks--
		} else {
			mainArr.unshift(mainColumn)
			mainColumn--
		}
	}

	//save for creating rounds
	//main player array length
	var mpal = mainArr.length
	//move info from mainArr and seperate it into left and right arrays
	var looplngth = mainArr.length/4

	for (c = 0; c < looplngth; c++){
		if (mainArr[0] == "") {
			blanksLeft++
		}
		if (mainArr[mainArr.length-1] == "") {
			blanksLeft++
		}
		mainArrLeft.push(mainArr.shift());
		mainArrLeft.push(mainArr.pop())

		if (mainArr[0] == "") {
			blanksRight++
		}
		if (mainArr[mainArr.length-1] == "") {
			blanksRight++
		}
		mainArrRight.push(mainArr.shift());
		mainArrRight.push(mainArr.pop())

	}

	// fill out extArr
	for (d = 0; d < extra; d++){
		extArr.unshift(contestants)
		contestants--
	}
	
	//save number of preheat for later use
	//epal = extra player array length
	var epal = extArr.length

	//for help in creating first main line after a preheat
	var opal = epal + mpal

	//move info from full extra array into left and right arrays
	for (e = 0; e <= extra/4; e++){
		if (extArr[0] != undefined){
			extArrRight.push(extArr.shift())
		}
		if (extArr[extArr.length-1] != undefined){
			extArrRight.push(extArr.pop())
		}
		if (extArr[0] != undefined){
			extArrLeft.push(extArr.shift())
		}
		if (extArr[extArr.length-1] != undefined){
			extArrLeft.push(extArr.pop())
		}
	}

	//series of for loops to build the total play array
	for (i = 0; i < extArrLeft.length; i++){
		totalPlayArr.push(extArrLeft[i])
	}
	
	for (j = 0; j < extArrRight.length; j++){
		totalPlayArr.push(extArrRight[j])
	}
	for (k = 0; k < mainArrLeft.length; k++){
		totalPlayArr.push(mainArrLeft[k])
	}
	for (l = 0; l < mainArrRight.length; l++){
		totalPlayArr.push(mainArrRight[l])
	}

	var tpal = totalPlayArr.length


	//add more blanks to the total play array to reference winner position
	for(g=0; g < brktInfo.roundsTotal*2-tpal; g++){
		totalPlayArr.push("")
	}

	tpal = totalPlayArr.length
	//divide array into rounds "" = reference to winner
	var rndWin = 1;
	var roundNo = 1;
	for(h = 0; h<tpal; h += 2){
		var player1 = "";
		var player2 = "";
		var preheatStatus = false;
		var firstHeatStatus = false;
		var double = false;
		var p1wc
		var p2wc

		if (h < epal){
			preheatStatus = true;
		} else if (h >= epal && h < opal){
			firstHeatStatus = true
			if (totalPlayArr[h] === "" && totalPlayArr[h+1] === ""){
				double = true;
			}
		}

		if (totalPlayArr[h] == ""){
			player1 = "Winner of round "+rndWin;
			p1wc = rndWin
			rndWin++
		} else {
			player1 = totalPlayArr[h]
		}

		if (totalPlayArr[h+1] == ""){
			player2 = "Winner of round "+rndWin;
			p2wc = rndWin
			rndWin++
		} else {
			player2 = totalPlayArr[h+1]
		}

		var round = {
			"round" : roundNo,
			"player1" : player1,
			"p1wc" : p1wc,
			"player2" : player2,
			"p2wc" : p2wc,
			"preheat" : preheatStatus,
			"firstheat" : firstHeatStatus,
			"double" : double
		}

		brktInfo.rounds.push(round)
		roundNo++;
	}

	//unbelievably complicated way of marking true for this one statue
	//important for spacing in css
	for (z = 0; z < brktInfo.rounds.length; z++){
		if (brktInfo.rounds[z].firstheat == true && brktInfo.rounds[z].double == true){
			//the -1 is to point it the correct position in the array
			brktInfo.rounds[brktInfo.rounds[z].p1wc-1].double = true;
			brktInfo.rounds[brktInfo.rounds[z].p2wc-1].double = true;
		}

	}
	//--------------------------------------------------------
	//Generate heats array for bracket info
	//---------------------------------------------------------
	var heatNo = 1

	//exclude if no extra heat should be played
	if (extArrRight.length > 0){
		var preHeatTotal = {
			"heat" : heatNo,
			"rndsLeft" : blanksLeft,
			"rndsRight" : blanksRight,
			"noOfRnds" : (extArrLeft.length/2) + (extArrRight.length/2),
			"preheat" : true
		}

		heatNo++;
		brktInfo.heats.push(preHeatTotal)
	}

	//------------------------------------------------------
	//issue with 3 or 2
	//main array right = " , "
	//work around to keep from generating to many rounds per heat

	var noMainRnds

	if (mainArrRight[0] == undefined){
		noMainRnds = (mainArrLeft.length/2)
	} else {
		noMainRnds = (mainArrLeft.length/2) + (mainArrRight.length/2)
	}

	//----------------------------------------------------------

	var mainHeatTotal = {
		"heat" : heatNo,
		"noOfRnds" : noMainRnds,
		"preheat" : false
	}

	brktInfo.heats.push(mainHeatTotal)
	heatNo ++;

	var restHeats = brktInfo.heatsTotal-brktInfo.heats.length

	for (m = restHeats; m > 0 ; m--){
		var noOfRnds = noMainRnds/2
		var nextHeat = {
			"heat" : heatNo,
			"noOfRnds" : noOfRnds,
			"preheat" : false
		}

		brktInfo.heats.push(nextHeat)
		noMainRnds /= 2
		heatNo++
	}

	return brktInfo
}




//--------------------------------------------------------------------------------
//Creates the columns formed in the html and css
//-----------------------------------------------------------------------------------
function createCol(bracket){
	var rndLoc = 0
	// create bracket
	for(i = 0; i<bracket.heatsTotal; i++){
		//first if is for first heat and not adding column for svg
		if (i == 0){
			$(".brktBox").append("<div class=brktCol id=heat"+i+"></div>");
			if(bracket.heats[0].preheat == true){
				$("#heat0").addClass("pre-heat")
				//if pre heat is bigger than the first heat, it needs to determine the height of the column
				if (bracket.heats[i].noOfRnds > bracket.heats[i+1].noOfRnds){
					$("#heat0").addClass("bigger")
				}

				$("#heat0").append("<div id=preheatLeft></div>");
				for (k = 0; k <bracket.heats[i].rndsLeft; k++){
					createRnds(bracket.rounds[rndLoc], "preheatLeft", bracket.rounds[rndLoc].double == true ? true : false, true)
					rndLoc++
				}

				$("#heat0").append("<div id=preheatRight></div>");

				for (m = 0; m <bracket.heats[i].rndsRight; m++){
					createRnds(bracket.rounds[rndLoc], "preheatRight", bracket.rounds[rndLoc].double == true ? true : false, true)
					rndLoc++
				}

			}
		} else {
			//connector column
			$(".brktBox").append("<div class=conCol id=con"+i+"></div>");
			$(".brktBox").append("<div class=brktCol id=heat"+i+"></div>");
			for (j = 0; j<bracket.heats[i].noOfRnds; j++){

				createRnds(bracket.rounds[rndLoc], "heat"+i)
				rndLoc++
			}
		}
	}
}

function createRnds (round, column, dblChk, phChk){
	var col = "#"+column

	$(col).append("<div class=round id=rnd"+round.round+">Round "+round.round+"</div>");
	if (phChk == true){
		$("#rnd"+round.round).addClass("pH")
	}
	if (dblChk == true){
		$("#rnd"+round.round).addClass("dblPH")
	}

	$("#rnd"+round.round).append("<div class=players id=player1-seat"+round.player1+">"+round.player1+"</div>");
	$("#rnd"+round.round).append("<div class=players id=player2-seat"+round.player2+">"+round.player2+"</div>");

}