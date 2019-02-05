<?php
$connect_error = 'Sorry, we\'re experiencing temporary connection issues.';
mysql_connect("localhost", "dgaulton_dom", "ib1512764663") or die($connect_error);
mysql_select_db("dgaulton_phpacademy") or die($connect_error);
?>