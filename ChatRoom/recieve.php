<?php
include 'function.php';

function getMessages(){
	$dbmessages = mysqli_query("SELECT * FROM conversations");
	echo $dbmessages;
}

getMessages();
?>