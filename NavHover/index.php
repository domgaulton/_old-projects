<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Drop Down Menu</title>
	<style type="text/css">
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	ul li {
		float: left;
		width: 150px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: red;
		margin: 0 1px;
	}

	ul li a {
		text-decoration: none;
		color: white;
	}

	ul li li {
		background: red;
		color: white;
		display: none;
		border-top: 2px solid white;
	}

	ul li li a {
		text-decoration: none;
		color: white;
	}

	ul li li:hover {
		background: #555;
		color: white;
	}
	</style>
</head>
<body>

	<ul>
		<li><a href="#">Item1</a>
			<ul>
				<li><a href="">Link1</a></li>
				<li><a href="">Link2</a></li>
				<li><a href="">Link3</a></li>
				<li><a href="">Link4</a></li>
			</ul>
		</li>
		<li><a href="#">Item2</a>
			<ul>
				<li><a href="">Link1</a></li>
				<li><a href="">Link2</a></li>
				<li><a href="">Link3</a></li>
				<li><a href="">Link4</a></li>
			</ul>
		</li>
		<li><a href="#">Item3</a></li>
		<li><a href="#">Item4</a></li>
		<li><a href="#">Item5</a></li>
	</ul>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/init.js"></script>
</body>
</html>