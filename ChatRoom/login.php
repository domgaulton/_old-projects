<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

if ($username&&$password ) {
	
	$connect = mysql_connect("localhost", "root", "root") or die("Couldn't connect");
	mysql_select_db("chatroom") or die("Couldn't find database");

	$query = mysql_query("SELECT * FROM users WHERE username='$username'");
	$numrow = mysql_num_rows($query);
	
	if ($numrow !=0){
		while ($row = mysql_fetch_assoc($query)){
			$dbusername = $row['username'];
			$dbpassword = $row['password'];
		}
			if ($username==$dbusername&&$password==$dbpassword){
				$_SESSION['username']=$username;
				$_SESSION['id']=$user_id;
				header ('location: chatroom.php');
			} else {
				echo "Incorrect password! <a href='index.php'>return</a>";
			}
	} else {
		die("That user doesn't exist <a href='index.php'>return</a>");
	}

} else {
	die("You must enter a username and password! <a href='index.php'>return</a>");
}


?>