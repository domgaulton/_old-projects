<?php
session_start();
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
	
	<form id="login" method="POST" action="login.php">
		<p>Username:<input type="text" name="username"></p>
		<p>Password:<input type="password" name="password"></p>
		<input type="submit" name="submit" value="Log In!">
	</form>

</body>
</html>