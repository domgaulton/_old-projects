<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Number Pop</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="apple-mobile-web-app-capable" content="yes">
</head>
<body>

<div id="game">
	<div id="startBlank">
		<h1>READY...</h1>
		<input type="number" min="0" max="8" id="time"></input>
		<p id="start">ENTER AMMOUNT OF SECONDS THEN CLICK HERE TO START</p>
	</div>
	<div id="endBlank">
		<h1>HOW MANY BLIPS?</h1>
		<input type="number" min="0" id="guess"></input>
		<p id="reveal">ENTER NUMBER THEN CLICK HERE TO REVEAL</p>
		<div id="feedback"></div>
	</div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
		<div class="border"><div class="blip"></div></div>
</div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/init.js"></script>
</body>
</html>