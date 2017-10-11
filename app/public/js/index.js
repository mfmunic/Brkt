$(document).ready(function(){

	//number of contestants
	//hardcoded for now
	var nCont = 3;
	console.log("original number = "+nCont);

	var main = 0;
	var extra = 0;
	var columns = -1;

	for (a = 1; a <= nCont; a *= 2){
		if (a * 2 <= nCont){
			main = a * 2;
		} else {
			extra = nCont - main
		}
		columns++
	}

	if (extra > 0){
		columns++
	}

	var mainColumn = main - extra
	extra *= 2

	console.log("main = "+main)
	console.log("extra = "+extra)
	console.log("columns = "+columns)
	//number of extra contestants
	var mainArr = []
	var mainArrLeft = []
	var mainArrRight = []
	var extArr = []
	var extArrLeft = []
	var extArrRight = []
	var blanks = 0
	if (extra > 0){
		blanks = extra/2
	}
	var blanksLeft = 0;
	var blanksRight = 0;
	console.log("blanks = "+blanks)

	for (b = 0; b < main; b++){

		if (blanks > 0){
			mainArr.unshift("");
			blanks--
		} else {
			mainArr.unshift(mainColumn)
			mainColumn--
		}
	}

	console.log("Full Array = "+mainArr)
	for (c = 0; c < mainArr.length; c++){
		mainArrLeft.push(mainArr.shift());
		if (mainArr[mainArr.length-1] == ""){
			blanksLeft++
			console.log("Blanks Left = "+blanksLeft)
		}
		mainArrLeft.push(mainArr.pop())
		mainArrRight.push(mainArr.shift());
		if (mainArr[mainArr.length-1] == ""){
			blanksRight++
			console.log("Blanks Right = "+blanksRight)
		}
		mainArrRight.push(mainArr.pop())
	}

	console.log("Left side = "+mainArrLeft)
	console.log("Right Side = "+mainArrRight)

	for (d = 0; d < extra; d++){
		extArr.unshift(nCont)
		nCont--
	}

	console.log("Extra = "+extArr)

	for (e = 0; e < blanksRight; e++){
		extArrRight.push(extArr.shift())
		extArrRight.push(extArr.pop())
	}

	for (f = 0; f < blanksLeft; f++){
		extArrLeft.push(extArr.shift())
		extArrLeft.push(extArr.pop())
	}

	console.log("Left Extra = "+extArrLeft)
	console.log("Right Extra = "+extArrRight)

	//shift pop to create Rounds ---------------------------------------------------------------------------------------
	//number of columns for connecting lines
	var conCol = columns-1;

	var totalCol = columns+conCol;

	console.log("Total columns = "+totalCol)
	//number of columns based on the number of contestants
	// var nCol = Math.log(nCont)/Math.log(2)

	//create columns
	// for(i = 0; i<totalCol; i++){
	// 	if (i > 0&&i%2 != 0){
	// 		//column to hold SVG
	// 		$(".brktBox").append("<div class=conCol id=rnd"+i+"></div>");
	// 	} else {
	// 		//column to hold contestants and rounds
	// 		$(".brktBox").append("<div class=brktCol id=rnd"+i+"></div>");
	// 		//for extra contestants beyond div by 4
	// 		if (extCont > 0 && i == 0){
	// 			for (h = 0; h<extCont; h++){
	// 				$("#rnd"+i).append("<div class=cont>"+nCont+"</div>");
	// 				nCont--;
	// 			}
	// 		} else {
	// 			//start of regular bracket
	// 			var curRnd = nCont
	// 			for (j = 0; j<nCont; j++){
	// 				$("#rnd"+i).append("<div class=cont>"+curRnd+"</div>");
	// 				curRnd--
	// 			}
	// 			nCont = Math.floor(nCont/2)
	// 		}
	// 	}
	// }
})