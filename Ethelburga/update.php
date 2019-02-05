<?php 

	include 'func.php';

?>

<!DOCTYPE>
<html>
<head>
<link rel="stylesheet" type="text/css" href="theme.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<body id="everything">


<form id="form" action="addteam.php" method="POST">
	<h1>Add Team</h1>
	<input type="text" name="teamname" placeholder="Add Team">
	<input type="submit" value="submit">
</form>

<form id="form" action="addtotable.php" method="POST">
	<h1>Update Scores</h1>
	<tr>
		<select name="team1">
			<?php teams() ?>
		</select>
	</tr>
	<tr>
		vs.
	</tr>
	<tr>
		<select name="team2">
			<?php teams() ?>
		</select>
	</tr>
<br>
	<tr>
		<select name="score1">
			<option value="0"> 0 </option>
			<option value="1"> 1 </option>
			<option value="2"> 2 </option>
			<option value="3"> 3 </option>
			<option value="4"> 4 </option>
			<option value="5"> 5 </option>
			<option value="6"> 6 </option>
			<option value="7"> 7 </option>
			<option value="8"> 8 </option>
			<option value="9"> 9 </option>
			<option value="10"> 10 </option>
		</select>
	</tr>
	<tr>
		vs.
	</tr>
	<tr>
		<select name="score2">
			<option value="0"> 0 </option>
			<option value="1"> 1 </option>
			<option value="2"> 2 </option>
			<option value="3"> 3 </option>
			<option value="4"> 4 </option>
			<option value="5"> 5 </option>
			<option value="6"> 6 </option>
			<option value="7"> 7 </option>
			<option value="8"> 8 </option>
			<option value="9"> 9 </option>
			<option value="10"> 10 </option>
		</select>
	</tr>
<br>
<br>
	<input type="submit" value="enter">
</form>

<div id="right">
<h1>Head to Head</h1>
<p><a href="headtohead.php">head to head</a></p>
<p><a href="index.php">back to table</a></p>
</div>

<ul id="results">
	<?php editResults() ?>
</ul>


</body>
</html>
