<?php

function clients() {
$data = mysql_query("SELECT * FROM addClients") or die(mysql_error());
	while($info = mysql_fetch_array($data)){
		echo '<tr>';
			echo '<td>' . $info['id'] . '</td>';
			echo '<td>' . $info['name'] . '</td>';
			echo '<td>' . $info['surname'] . '</td>';
			echo '<td>' . $info['email'] . '</td>';
			echo '<td>' . $info['dob'] . '</td>';
			echo '<td>' . $info['pension'] . '</td>';
			echo '<td>' . $info['datetime'] . '</td>';
		echo '</tr>';
	}
};

?>