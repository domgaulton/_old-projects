$(document).ready(function () {
	clicks = 0;
	counter = 0;
	beatsToGo = 60;
	
	setInterval(function () {
		counter = counter + 0.1;
	}, 100);

	$("#clickMe").click(function () {
		beatsToGo = beatsToGo - 1;
		clicks = clicks + 1;
		counts = ((60 / counter) * clicks).toFixed(2);
		$("#bpm").text(counts);
		
		$("#beatsLeft").text(beatsToGo);
		if (beatsToGo == 0) {
			alert ('That song had ' + counts + ' BPM!');
		};
	});
});