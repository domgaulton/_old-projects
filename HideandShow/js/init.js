$('#a_button').click(function() {
	$('#a_div').hide(3000);
});

$(document).ready(function() {
	$("#b_div").hide();
});

$('#b_button').dblclick(function() {
	$('#b_div').show('fast');
});

$("#t_button").click(function() { 
	$("#t_div").toggle();
});

$("#togg_button").click(function() { 
	if ($(this).text() == "Hide Text") {
		$("#togg_div").hide(); 
		$(this).text("Show Text");
	} else {
		$("#togg_div").show(); 
		$(this).text("Hide Text");
  	}; 
});