<?php
session_start();
include 'function.php';

if ($_SESSION['username']&&$_SESSION['password']){
	echo "Welcome, " . $_SESSION['username'] . " and " . $_SESSION['password'] . "! <a href='logout.php'>Click here to log out</a> or <a href='advice.php'>advice</a>" ;
} else {
	notLoggedIn();
}
?>