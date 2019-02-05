<?php
	
	// Connects to your Database 
	mysql_connect("localhost", "dgaulton_sandbox", "testbed1") or die(mysql_error()); 
	mysql_select_db("dgaulton_ethelburga") or die(mysql_error()); 
	mysql_query("SET SESSION time_zone = 'GMT'");

?>