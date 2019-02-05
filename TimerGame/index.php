<?php include 'php/highscores.php'; ?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Timer Game</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width, user-scalable=no">
</head>
<body>

	<div id="game">
		<div id="instructions">
			<h1>TIMER GAME</h1>
			<p>1: HOW MANY SECONDS?</p>
			<select id="timeSet">
				<option>TIME</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>>4</option>
				<option id="5">5</option>
				<option id="6">6</option>
				<option id="7">7</option>
				<option id="8">8</option>
				<option id="9">9</option>
				<option id="10">10</option>
				<option id="11">11</option>
				<option id="12">12</option>
				<option id="13">13</option>
				<option id="14">14</option>
				<option id="15">15</option>
				<option id="16">16</option>
				<option id="17">17</option>
				<option id="18">18</option>
				<option id="19">19</option>
				<option id="20">20</option>
			</select>
			<p>2: HOW DIFFICULT?</p>
			<select id="difficulty">
				<option>DIFFICULTY</option>
				<option>EASY</option>
				<option>MEDIUM</option>
				<option>HARD</option>
			</select>
		</div>
		<button id="start">START</button>
		<button id="stop">STOP</button>
		<div id="feedback">
			<p id="highScore">HIGH SCORES</p>
		</div>
	</div>



	<div id="topScores">
		<h1>HIGH SCORES</h1><div id="closeScores">X</div>
		<table>
			<thead>
			<tr>
				<td><img id='scoreInfo' src='img/button.png'></td>
				<td>NAME</td>
				<td>SCORE</td>
			</tr>
			</thead>
			<tbody>
				<?php highScores(); ?>
			</tbody>
		</table>
		<div id="scoreCalculation">
			<p>The final score takes your time set, difficulty and accuracy into account - to get on here try increasing difficulty &amp; time!</p>
		</div>
	</div>

	</div>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/init.js"></script>
</body>
</html>