<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Live Time</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript">
	
	function countDown(secs,elem) {
		//elem in this case equals div id="status"
		var element = document.getElementById(elem);
		element.innerHTML = "Please wait for " + secs + " seconds";

		if (secs < 1){
			clearTimeout(timer);
			element.innerHTML = '<h2>Countdown Complete!</h2>';
			element.innerHTML += '<a href="#">Click Here Now</a>';
		}
		
		secs--;
		var timer = setTimeout('countDown(' + secs + ',"' + elem + '")',1000);
	}
	</script>
</head>
<body>

	<div id="status"></div>

<script type="text/javascript">countDown(10,"status");</script>
</body>
</html>