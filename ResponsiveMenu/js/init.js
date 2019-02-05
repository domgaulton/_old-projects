/*
$(document).ready(function () {
	$("#menu_show").click(function () {
		$("#menu_phone").toggle();
	});
});
*/

/*
$("#menu_show").click(function() { 
	if ($(this).text() == "Show Menu...") {
		$("#menu_phone").show(); 
		$(this).text("Hide Menu...");
	} else {
		$("#menu_phone").hide(); 
		$(this).text("Show Menu...");
  	}; 
});
*/

//This now has the top li element as menu_hide - remove this li if you want to use v.2
$("#menu_show").click(function() { 
	$("#menu_phone").show(); 
});

$("#menu_hide").click(function() { 
	$("#menu_phone").hide(); 
});