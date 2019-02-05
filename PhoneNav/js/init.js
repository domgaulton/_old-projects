$("#menuButton").click(function() {
	$("#topMB").toggleClass("animateA")
	$("#midMB").fadeToggle(50)
	$("#botMB").toggleClass("animateC")
	$("#menu").toggle().css("position", "absolute").css("top", "57px")
});