var sound1 = new Audio('sounds/1.mp3');
var sound2 = new Audio('sounds/2.mp3');
var sound3 = new Audio('sounds/3.mp3');
var sound4 = new Audio('sounds/4.mp3');

score = 0;
level = 0;


$("#start").click(function () {
	if (score == 0) {
		simonSays();
	} else {
		location.reload(true);
	}
});

function simonSays(){
	seqNo = "#" + Math.floor((Math.random() * 4) + 1);	// random number with # added to the start
	$("#simonSequence").append(seqNo.slice(-1));		// store the sequence
	level = level + 1;									// level up
	$("#level").text(level);							// display level
	$(seqNo).animate({opacity: 1,},600);				// animate
	$(seqNo).animate({opacity: 0.5,},600);				// animate
	$(seqNo).animate({opacity: 0.5,},1000);				// animate
	simonChoice = (seqNo.slice(-1));					// only take final two letters as # is being returned but the attribute id is without
	return simonChoice;
}

$(".press").mousedown(function () {
	player = $(this).attr("id");						// record what div id the player has clicked
	$(this).animate({opacity: 1,},200);					// animate the click
	$(this).animate({opacity: 0.5,},400);				// animate the click
	$(this).animate({opacity: 0.5,},1000);				// animate the click

	simonSequence = $("#simonSequence").text();
	i = 0;

	while (i < level) {
		simon = simonSequence[i];
		$(simon).animate({opacity: 1,},200);					// animate the click
		$(simon).animate({opacity: 0.5,},400);					// animate the click
		$(simon).animate({opacity: 0.5,},1000);					// animate the click
		if ( simon == player) {
			score = score + 1;
			$("#playerScore").text("SCORE: " + score);			// update score on screen
			$("#playerSequence").append(player);				// record player choice
			i = i + 1;
		} else {
			alert ("Game Over, Your final score was: " + score);	// Game over
			location.reload(true);
		} 
	} simonSays();
});



/*

$(".press").mousedown(function playerSays() {
	playerChoice = $(this).attr("id");					// record what div id the player has clicked
	$(this).animate({opacity: 1,},200);					// animate the click
	$(this).animate({opacity: 0.5,},400);				// animate the click
	$(this).animate({opacity: 0.5,},1000);				// animate the click
	if (playerChoice == simonChoice) {					// if player div id equals simonChoice 
		score = score + 1;									// add 1 to the score
		$("#playerScore").text("SCORE: " + score);			// update score on screen
		$("#playerSequence").append(playerChoice);			// record player choice
		simonSaysSequence();										// run another function
	} else {
		alert ("Game Over, Your final score was: " + score);	// Game over
		location.reload(true);
	}
});

function simonSaysSequence() {
	simonSequence = $("#simonSequence").text();
	i = 0;

	while (i < level) {
		simon = simonSequence[i];
		$(simon).animate({opacity: 1,},200);					// animate the click
		$(simon).animate({opacity: 0.5,},400);					// animate the click
		$(simon).animate({opacity: 0.5,},1000);					// animate the click
		i = i + 1;
		$(".press").mousedown(function () {
			player = $(this).attr("id");						// record what div id the player has clicked
		});
			if ( simon != player) {
				alert ("Game Over, Your final score was: " + score);	// Game over
				location.reload(true);
			}
	} simonSays();
}


*/
