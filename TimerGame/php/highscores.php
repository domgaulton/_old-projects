<?php 	

mysql_connect("localhost", "root", "root") or die(mysql_error()); 
mysql_select_db("timergame") or die(mysql_error()); 

function highScores() {
	$data = mysql_query("SELECT * FROM highscores ORDER BY score DESC LIMIT 10") or die(mysql_error());
	$i=1;
	while($users = mysql_fetch_array($data)) {
		echo '<tr>';
		echo '<td>'. $i++ .'</td>';
		echo '<td>' . $users['name'] . '</td>';
		echo '<td>' . $users['score'] . '</td>';
		echo '</tr>';
	}
};


?>