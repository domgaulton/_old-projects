<?php

	include 'connect.php';

	// Collects data from "friends" table 
	function teams() {
	$data = mysql_query("SELECT * FROM `league`") or die(mysql_error());
		while($info = mysql_fetch_array($data)){
			echo '<option value="' . $info['team'] . '">' . $info['team'] . '</option>';
		} 
	}

	function leagueTeams() {
	$data = mysql_query("SELECT * FROM `league` ORDER BY points DESC, played ASC, GF DESC, GA DESC") or die(mysql_error());
		while($info = mysql_fetch_array($data)){
			echo '<tr>';
			echo '<td>' . $info['team'] . '</td>';
			echo '<td>' . $info['played'] . '</td>';
			echo '<td>' . $info['won'] . '</td>';
			echo '<td>' . $info['drawn'] . '</td>';
			echo '<td>' . $info['lost'] . '</td>';
			echo '<td>' . $info['GF'] . '</td>';
			echo '<td>' . $info['GA'] . '</td>';
			echo '<td>' . $info['GD'] . '</td>';
			echo '<td>' . $info['points'] . '</td>';
			echo '<td>' . $info['avgpoints'] . '</td>';
			echo '</tr>';
	}
}

	function results() {
	$scores = mysql_query("SELECT * FROM `games` ORDER BY game_id DESC LIMIT 10") or die(mysql_error());
		while($info = mysql_fetch_array($scores)){
			echo '<li>' . $info['team1'] . ' ' . $info['score1'] . ' - ' . $info['team2'] . ' ' . $info['score2'] . '<span style="float: right">' . $info['datetime'] . '</span></li>';
		} 
	}

	function editResults() {
	$scores = mysql_query("SELECT * FROM `games` ORDER BY game_id DESC LIMIT 10") or die(mysql_error());
		while($info = mysql_fetch_array($scores)){
			echo '<li><a href="delete.php?game_id=' . $info['game_id'] . '">X</a> ' . $info['team1'] . ' ' . $info['score1'] . ' - ' . $info['team2'] . ' ' . $info['score2'] . '<span style="float: right">' . $info['datetime'] . '</span></li>';
		} 
	}

	function deleteResult() {
		$game_id = $_GET['game_id'];

		$gameData = mysql_query("SELECT * FROM games WHERE game_id = $game_id") or die(mysql_error());
		($scoreData = mysql_fetch_array($gameData)); {
		$team1 = $scoreData[2];
		$team2 = $scoreData[3];
		$score1 = $scoreData[4];
		$score2 = $scoreData[5];
			if ($score1 > $score2) {
			// win team1
			$sql1="UPDATE league SET played=played-1, won=won-1, GF=GF-$score1, GA=GA-$score2, GD=GF-GA, points=points-3, avgpoints=(points/played) WHERE team='$team1'";
			$sql2="UPDATE league SET played=played-1, lost=lost-1, GF=GF-$score2, GA=GA-$score1, GD=GF-GA, avgpoints=(points/played) WHERE team='$team2'";
			} else if ($score1 < $score2) {
			// win team 2
			$sql1="UPDATE league SET played=played-1, won=won-1, GF=GF-$score2, GA=GA-$score1, GD=GF-GA, points=points-3, avgpoints=(points/played) WHERE team='$team2'";
			$sql2="UPDATE league SET played=played-1, lost=lost-1, GF=GF-$score1, GA=GA-$score2, GD=GF-GA, avgpoints=(points/played) WHERE team='$team1'";
			$message='' . $team2 . ' wins ' . $score2 . ' - ' . $score1 . '<br><a href="index.php">return to table</a>';
			} else {                 
			$sql1="UPDATE league SET played=played-1, drawn=drawn-1, GF=GF-$score1, GA=GA-$score1, GD=GF-GA, points=points-1, avgpoints=(points/played) WHERE team='$team1'";
			$sql2="UPDATE league SET played=played-1, drawn=drawn-1, GF=GF-$score2, GA=GA-$score2, GD=GF-GA, points=points-1, avgpoints=(points/played) WHERE team='$team2'";
			$message='' . $team1 . ' and ' . $team2 . ' draw ' . $score1 . ' - ' . $score1 . '<br><a href="index.php">return to table</a>';
			}
			mysql_query($sql1) or die(mysql_error());
			mysql_query($sql2) or die(mysql_error());

			mysql_query("DELETE FROM games WHERE game_id = $game_id") or die(mysql_error());

			header('Location: index.php');
		}

	}

	function teamsAreEqual(){
		$team1 = $_POST['team1'];
		$team2 = $_POST['team2'];
		$score1 = $_POST['score1'];
		$score2 = $_POST['score2'];
		if($team1===$team2){
			echo('The same team can\'t play itself! <br> <a href="update.php">back</a>');
		} else {
			mysql_query("SET time_zone = timezone"); 
			mysql_query("INSERT INTO games (`team1`, `team2`, `score1`, `score2`) VALUES ('$team1', '$team2', '$score1', '$score2')") or die (mysql_error());
			echo ('Match added <br>' .writeGames(). '<a href="index.php>return to league</a>');
		}
	}

	function writeGames(){
		$team1 = $_POST['team1'];
		$team2 = $_POST['team2'];
		$score1 = $_POST['score1'];
		$score2 = $_POST['score2'];

		if ($score1 > $score2) {
			// win team1
			$sql1="UPDATE league SET played=played+1, won=won+1, GF=GF+$score1, GA=GA+$score2, GD=GF-GA, points=points+3, avgpoints=(points/played) WHERE team='$team1'";
			$sql2="UPDATE league SET played=played+1, lost=lost+1, GF=GF+$score2, GA=GA+$score1, GD=GF-GA, avgpoints=(points/played) WHERE team='$team2'";
			$message='' . $team1 . ' wins ' . $score1 . ' - ' . $score2 . '<br><a href="index.php">return to table</a>';
		} else if ($score1 < $score2) {
			// win team 2
			$sql1="UPDATE league SET played=played+1, won=won+1, GF=GF+$score2, GA=GA+$score1, GD=GF-GA, points=points+3, avgpoints=(points/played) WHERE team='$team2'";
			$sql2="UPDATE league SET played=played+1, lost=lost+1, GF=GF+$score1, GA=GA+$score2, GD=GF-GA, avgpoints=(points/played) WHERE team='$team1'";
			$message='' . $team2 . ' wins ' . $score2 . ' - ' . $score1 . '<br><a href="index.php">return to table</a>';
		} else {                 
			$sql1="UPDATE league SET played=played+1, drawn=drawn+1, GF=GF+$score1, GA=GA+$score1, GD=GF-GA, points=points+1, avgpoints=(points/played) WHERE team='$team1'";
			$sql2="UPDATE league SET played=played+1, drawn=drawn+1, GF=GF+$score2, GA=GA+$score2, GD=GF-GA, points=points+1, avgpoints=(points/played) WHERE team='$team2'";
			$message='' . $team1 . ' and ' . $team2 . ' draw ' . $score1 . ' - ' . $score1 . '<br><a href="index.php">return to table</a>';
		}
		mysql_query($sql1) or die(mysql_error());
		mysql_query($sql2) or die(mysql_error());
		// I think this will fall through to next line if call is successful.  It might be more elegant though to intercept the message and return it instead.
		return $message;
	}

	function headtohead() {
		$team1 = $_POST['team1'];
		$team2 = $_POST['team2'];

		$scores = mysql_query("SELECT * FROM `games` WHERE team1='$team1' AND team2='$team2' OR team1='$team2' AND team2='$team1'") or die(mysql_error());
		while($info = mysql_fetch_array($scores)){
			echo '<li>' . $info['team1'] . ' ' . $info['score1'] . ' - ' . $info['team2'] . ' ' . $info['score2'] . '<span style="float: right">' . $info['datetime'] . '</span></li>';
		} 
	}



?>
