$(document).ready(function() {
	eventTime = Date.parse("26 July 2014 20:30:00") / 1000;
	currentTime = Math.floor($.now() / 1000);
	currentTimeB = $.now() / 1000;
	alert (currentTimeB);

	seconds = eventTime - currentTime;

	hours = Math.floor(seconds / (60 * 60));
	divisor_for_minutes = seconds % (60 * 60);
	divisor_for_seconds = divisor_for_minutes % 60;
	seconds = Math.ceil(divisor_for_seconds);

	string = 'Only ' + hours + ' hours and ' + seconds + ' seconds until GS'; 

	setTimeout("function()", 500);

	$("#hours").text(string);
});

	