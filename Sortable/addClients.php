<?php

mysql_connect('localhost', 'dgaulton_t3st3r', 't3st3r') or die(mysql_error());
mysql_select_db('dgaulton_t3st') or die(mysql_error());


$firstname	= $_POST['firstname'];
$surname	= $_POST['surname'];
$email		= $_POST['email'];
$dob		= $_POST['DOB'];
$pension	= $_POST['pension'];
$datetime 	= date('Y-m-d H:i:s');

mysql_query("INSERT INTO addClients (name, surname, email, dob, pension, datetime) VALUES ('$firstname','$surname','$email','$dob','$pension','$datetime')") or die (mysql_error()) ;
?>
<!doctype html>
<html lang="en">


<head>
	<meta charset="utf-8">
	<title>Saved!</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<h1>Thanks!</h1>

<div class="logInOut"><a href="index.php">return</a></div>

</body>
</html>