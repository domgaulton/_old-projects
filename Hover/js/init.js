//https://www.youtube.com/watch?v=_GrWaN05-Vs&index=51&list=PL63FBA8CE574044B6

$(".hover").mousemove(function(e) {
	var description = $(this).attr("hovertext");
	$("#hoverdiv").text(description).show();
	$("#hoverdiv").css("top", e.clientY+10).css("left", e.clientX+10);
}).mouseleave(function() {
	$("#hoverdiv").hide();
});