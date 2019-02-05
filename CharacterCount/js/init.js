//https://www.youtube.com/watch?v=13bceSHothY&index=45&list=PL63FBA8CE574044B6

$(document).ready(function() {
	var max_length = $('#text_area').attr('maxlength');
	$("#characters").html(max_length + ' characters remaining');

	$("#text_area").keyup(function() {
	var characters_used = $("#text_area").val().length;
	var characters_remain = max_length - characters_used;

	$("#characters").html(characters_remain + ' characters remaining');
		if (characters_remain < 11) {
			$("#characters").css("color", "red");
		} else {
			$("#characters").css("color", "inherit");
		}
	});
});