$(document).ready(function() {
	windowHeight = $(window).height();
	windowWidth = $(window).width();
	dots = (1-Math.random()*98);

	$("body").css("overflow", "hidden");

	if (windowWidth < 1000) {
		alert ("You are on a small screen - make sure you are zoomed out with the phone in landscape mode");
	}

	divs = $(".blip").get().sort(function(){ 
	return Math.round(Math.random())-0.5; //random so we get the right +/- combo
	}).slice(0,dots)
	$(divs).show();
	
	$("#start").click(function() {
		timeOut = $("#time").val();
		timeOut = (timeOut * 1000);
		$("#startBlank").hide();
			setInterval(function() {
				$("#endBlank").show("fast", function() {
					$(".blip").hide();
				});	
			}, timeOut);
	});

	$("#reveal").click(function(){
		guess = $("#guess").val();
		fDots = Math.round(98-(Math.abs(dots)));
		answer = fDots - guess;
		answer = Math.abs(answer);
		if (answer == 0){
			$("#feedback").text("CORRECT!");
		} else {
			$("#feedback").text("THERE WERE " + fDots + "... YOU WERE " + answer + " AWAY!");
		}
	})
});