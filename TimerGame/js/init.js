var startTime;
var timeSet;
var difficulty;
var diffPercent;

$("#timeSet").blur(function() {
    timeSet = Number($("#timeSet").val());
});

$("#difficulty").blur(function() {
    difficulty = $("#difficulty").val();
    if (difficulty == "EASY") {
		diffPercent = 0.5;
    } else if (difficulty == "MEDIUM") {
		diffPercent = 0.2;
    } else if (difficulty == "HARD") {
		diffPercent = 0.1;
    }
});

$("#start").click(function() {
	if (!timeSet||!diffPercent||timeSet=="TIME"||difficulty=="DIFFICULTY") {
		$('#feedback').text("YOU MUST SET A TIME AND DIFFICULTY");
	} else {
		startTime = Date.now();
		$('#feedback').text('STOP THE CLOCK BETWEEN ' + (timeSet - (timeSet*diffPercent)) + ' SECONDS AND ' + (timeSet + (timeSet*diffPercent)) + ' SECONDS!');
	}
});

$("#stop").click(function() {
	var endTime = Date.now();
	var finTime = (endTime - startTime)/1000;
	if (!timeSet||!diffPercent||timeSet=="TIME"||difficulty=="DIFFICULTY") {
		$('#feedback').text("YOU MUST SET A TIME AND DIFFICULT");
	} else {
		if (finTime == timeSet){
			score = (finTime * 100);
			$('#feedback').html("PERFECT!<br>" + finTime + " SECONDS!<br>SCORE: " + score);
			storeName();
		} else if (finTime > (timeSet - (timeSet*diffPercent)) && finTime < (timeSet + (timeSet*diffPercent))) {
			score = Math.abs(timeSet * (1 / (finTime - timeSet)) * (1/diffPercent)).toFixed(2);
			$('#feedback').html(finTime + " SECONDS... YOU WIN!<br>SCORE: " + score);
			storeName();
		} else {
			$('#feedback').html("YOU LOSE!<br>" + finTime + " SECONDS!");
		}
	}
	startTime = null;
});

function storeName(){
	var playerName = prompt("Enter Name (3 Characters)");
	var playerName = playerName.toUpperCase();
	if (playerName.length > 3 || playerName.length < 3) {
		storeName();
	} else {
		$.ajax({
			type: 'post',
			url: 'php/post.php',
			data: {
			name: playerName,
			score: score
			},
			complete: function() {
				$('#topScores').show(500);
			}
		});
	}
	return false;
}

$('#highScore').click(function() {
	$('#topScores').toggle(500);
});

$('#scoreInfo').click(function() {
	$('#scoreCalculation').fadeToggle(500);
});

$('#closeScores').click(function() {
	$('#topScores').hide(500);
});




