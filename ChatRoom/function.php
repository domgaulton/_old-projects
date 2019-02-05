<?php
$username = $_SESSION['username'];
$user_id = $_SESSION['id'];
$myMessage = $_POST['writeMessage'];

$connect = mysqli_connect("localhost", "root", "root", "chatroom") or die("Couldn't connect");
?>