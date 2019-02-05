<?php
include 'function.php';

mysql_query("INSERT INTO conversations (messages, user_id, datetime) VALUES ($myMessage, $user_id, now())");
?>