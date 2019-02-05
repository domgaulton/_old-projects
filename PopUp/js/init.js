$(".popUp h1").click(function () {
	$(this).next(".popText").css("display", "block");
});

$(".popUp button").click(function () {
	$(this).parent(".popText").css("display", "none");
});