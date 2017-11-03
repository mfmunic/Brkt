$(".inputBtn").on("click", function(){
	var check = $(".inputBtn").is(":checked");
	if (check == true){
		console.log("name")
		$("#playNames").css("height", "250px")
	} else {
		console.log("number")

		$("#playNames").css("height", "0")
	}
})