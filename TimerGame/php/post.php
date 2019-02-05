<?php 	

$connect = mysqli_connect("localhost","root","root","timergame")or die(mysqli_error());

$name	= $_POST['name']; 
$score	= $_POST['score']; 

mysqli_query($connect, "INSERT INTO highscores (name, score) VALUES ('$name', '$score')") or die(mysqli_error());


?>