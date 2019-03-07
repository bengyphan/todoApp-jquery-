// check off specific todo by clicking
$("li").click(function() {
	// if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)") {
		// turn it back to black
		$(this).css({
		color: "black",
		textDecoration: "none"
	});
	} else {
		// TURN IT GRAY
		$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
	}
	
})