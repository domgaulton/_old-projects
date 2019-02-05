<?php
session_start();
include 'function.php';

if ($_SESSION['username']){
	echo "Advice for " . $_SESSION['username'] . "! <a href='logout.php'>Click here to log out</a> or <a href='member.php'>member</a>" ;
} else {
	notLoggedIn();
}
?>