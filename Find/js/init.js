$(document).ready(function() {
	// select menu find first li add css - find next and hide it
	$(".menu").find("li").first().css("font-weight", "bold").click(function() {
		$(this).nextAll().toggle();
	}).nextAll().hide();
	
	// add class
	//$(".menu").find("li").last().addClass("underline");
});