<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>List App</title>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.css" />
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css"> 
</head>
<body>
<div data-role="page" id="home	">
	<header data-role="header">
		<h1>List App</h1>
	</header>
	<article data-role="content">
		<ul data-role="listview" data-filter="true">
			<li>
				<a href="#dog">
				<h1>Golden Retriever</h1>
				<img src="images/dog.jpg" alt="puppy" />
				<p>This tiny puppy is the bees knees!</p>
				</a>
			</li>
			<li>
				<a href="#gummies">
				<h1>Gummy bears</h1>
				<img src="images/gummies.jpg" alt="gummy bears" />
				<p>Gummy bears look so tasty and colourful!</p>
				</a>
			</li>
		</ul>
	</article>
	<footer data-role="footer" data-position="fixed">
		<nav data-role="navbar">
			<ul>
				<li><a href="#" data-icon="home">Home</a></li>
				<li><a href="#" data-icon="grid">Photos</a></li>
				<li><a href="#" data-icon="info">Info</a></li>
			</ul>
		</nav>
	</footer>
</div><!-- end of page -->

<?php include 'dog.php'; ?>

<?php include 'gummies.php'; ?>
</body>
</html>