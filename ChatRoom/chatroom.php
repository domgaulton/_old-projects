<?php
session_start();

$username = $_SESSION['username'];
$user_id = $_SESSION['id'];
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Chat Room</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width, user-scalable=no">
</head>
<body>
	
	<div id="chatRoom">
		<div id="messageBox">
			<div class="message sent">Test message from me that is really long and goes onto two lines if it is long enough or if the screen is not so wide... <span class="date"><br>14:08 11/03/1988</span></div>
			<div class="message recieved">Test message from someone else <span class="date"><br>14:08 11/03/1988</span></div>
		</div>
		<textarea id="writeMessage" type="text" name="writeMessage" placeholder="<?php echo $username ?> says..."></textarea>
		<button id="submitBtn" type="submit">Send</button>
	</div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/init.js"></script>
</body>
</html>