<?php
session_start();
?>
<html>
	<form action="login.php" method="POST">
		<p>Username: <input type="text" name="username"></p>
		<p>Password: <input type="password" name="password"></p>
		<input type="submit" value="Log In">
	</form>
</html>