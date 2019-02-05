<?php
	include 'func.php';
?>

<!DOCTYPE>
<html>
<link rel="stylesheet" type="text/css" href="theme.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ethelburga FIFA League</title>
<body>

<table id="leaguetable">
	<tr>
		<th>Team</th>
		<th>Played</th>
		<th>Won</th>
		<th>Drawn</th>
		<th>Lost</th>
		<th>GF</th>
		<th>GA</th>
		<th>GD</th>
		<th><a class="hidden" href="update.php">Points</a></th>
		<th>P/P</th>
	</tr>
	<?php leagueTeams() ?>
</table>
<div id="everything">

<ul id="results">
	<?php results() ?>
</ul>

</div>
</body>
</html>