<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>GDA Calculator</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>GDA Calculator</h1>
	<input type="text" id="FoodType" placeholder="Type food here"></input>
	<table id="GDA">
		<tr>
			<th>Energy (kcal)</th>
			<th>Fat (g)</th>
			<th>Saturates (g)</th>
			<th>Sugars (g)</th>
			<th>Salt (g)</th>
		</tr>
		<tr>
			<td><input type="text" id="Energy"></input></td>
			<td><input type="text" id="Fat"></input></td>
			<td><input type="text" id="Saturates"></input></td>
			<td><input type="text" id="Sugars"></input></td>
			<td><input type="text" id="Salt"></input></td>
		</tr>
		<tr>
			<td><div id="EnergyFB"></div></td>
			<td><div id="FatFB"></div></td>
			<td><div id="SaturatesFB"></div></td>
			<td><div id="SugarsFB"></div></td>
			<td><div id="SaltFB"></div></td>
		</tr>
	</table>
	<div id="total"></div>

<script type="text/javascript" src="/Development/js/jquery.js"></script>
<script type="text/javascript" src="js/init.js"></script>
</body>
</html>