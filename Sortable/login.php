<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Admin Login</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<h1>Enter admin details</h1>

<form method="POST" action="clients.php">
	<table>
		<tr>
			<td>Username:</td>
			<td><input type="text" id="username" name="username"></input></td>
		</tr>
		<tr>
			<td>Password:</td>
			<td><input type="password" id="password" name="password"></input></td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" id="submit" name="submit"></input></td>
		</tr>
	</table>
</form>

<div class="logInOut"><a href="index.php">back</a></div>

</body>
</html>