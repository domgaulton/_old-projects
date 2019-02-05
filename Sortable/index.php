<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Send Details</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>



<form method="POST" action="addClients.php">
	<table>
		<h1>Enter your details</h1>
		<tr>
			<td class="inputName">Name</td>
			<td><input type="text" id="firstname" name="firstname"></input></td>
			<td><div id="firstname_feedback"></div></td>
		</tr>
		<tr>
			<td class="inputName">Surname</td>
			<td><input type="text" id="surname" name="surname"></input></td>
			<td><div id="surname_feedback"></div></td>
		</tr>
		<tr>
			<td class="inputName">email</td>
			<td><input type="text" id="email" name="email"></input></td>
			<td><div id="email_feedback"></div></td>
		</tr>
		<tr>
			<td class="inputName">DOB</td>
			<td><input type="date" id="DOB" name="DOB"></input></td>
			<td><div id="DOB_feedback"></div></td>
		</tr>
		<tr>
			<td class="inputName">Pension</td>
			<td><input type="number" id="pension" name="pension"></input></td>
			<td><div id="pension_feedback"></div></td>
		</tr>
		<tr>
			<td class="inputName"></td>
			<td><input type="submit" name="submit"></input></td>
		</tr>
	</table>
</form>

<div class="logInOut"><a href="login.php">admin login</a></div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/init.js"></script>
</body>
</html>