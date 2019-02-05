$(function() {
	
	// Variables
	objectWidth = 32;
	objectHeight = 32;
	mapWidth = 610;
	mapHeight = 302;
	playerScore = 0;
	playerWidth = 32;
	playerHeight= 43;
	
	// Objects
	posLeft = Math.floor((Math.random() * 500) - 1);
	posTop = Math.floor((Math.random() * 200) - 1);
	object = '<div id="object"></div>';
	$("#map").append(object);
	
	function setObject() {
	posLeft = Math.floor((Math.random() * 500) - 1);
	posTop = Math.floor((Math.random() * 200) - 1);
		$("#object").css('left', posLeft + 'px').css('top', posTop + 'px');
	}
	setObject();

	// Player
	player = '<div id="player"></div>'; 
	$("#map").append(player);
	$("#score").text(playerScore);

	// Functions
	$(document).keyup(function() {
	x1 = $("#player").offset().left;
	y1 = $("#player").offset().top;
	h1 = $("#player").outerHeight(true);
	w1 = $("#player").outerWidth(true);
	b1 = y1 + h1;
	r1 = x1 + w1;
	x2 = $("#object").offset().left;
	y2 = $("#object").offset().top;
	h2 = $("#object").outerHeight(true);
	w2 = $("#object").outerWidth(true);
	b2 = y2 + h2;
	r2 = x2 + w2;

		if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
			playerScore = playerScore;
		} else {
			playerScore = playerScore + 1;
			$("#score").text(playerScore);
			setObject();
		}
	});

	$(document).keydown(function(e) {

		// Get current position of things
		playerPos = $("#player").position();
		objectPos = $("#object").position();

		switch (e.keyCode) {
			// left
			case 37: 
			if (playerPos.left > 0 ){
				$("#player").css('left', playerPos.left - 20 + 'px');
				break;
			} else {
				break;
			}
			
			// up
			case 38:
			if (playerPos.top > 0 ){
				$("#player").css('top', playerPos.top - 20 + 'px');
				break;
			} else {
				break;
			}

			// right
			case 39: 
			if (playerPos.left < 600 - playerWidth ){
				$("#player").css('left', playerPos.left + 20 + 'px');
				break; 
			} else {
				break;
			}
			
			// down
			case 40: 
			if (playerPos.top < 300 - playerHeight) {
				$("#player").css('top', playerPos.top + 20 + 'px');
				break;
			} else {
				break;
			}

		} // end of switch
	}); // end of keydown e-function

});

