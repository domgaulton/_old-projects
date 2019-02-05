<?php

mysql_connect("localhost", "root", "root");
mysql_select_db("jquery");

$username = mysql_real_escape_string($_POST['username']);

$check = mysql_query("SELECT username FROM people WHERE username='$username'");
$check_num_rows = mysql_num_rows($check);

if ($username == NULL) {
	echo "Please choose a username";
} else if (strlen($username)<=5) {
	echo "Username is too short";
} else {
	if ($check_num_rows == 0) {
		echo "$username avaliable!";
	} else if ($check_num_rows == 1) {
		echo "Username: $username already taken! Please choose another";
	}
}

?>