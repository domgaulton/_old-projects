<?php 

	include 'func.php';

?>

<!DOCTYPE>
<html>
<head>
<link rel="stylesheet" type="text/css" href="theme.css">
<body id="everything">
<form id="form" action="headtoheadresults.php" method="POST">
	<h1>Head to head</h1>
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
<br>
	<input type="submit" value="get scores">
</form>
<div id="right">
<p><a href="update.php">update table</a></p>
<p><a href="index.php">back to table</a></p>
</div>
</body>
</html>
