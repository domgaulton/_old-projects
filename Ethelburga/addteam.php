<?php 

	include 'func.php';

	$teamname = $_POST['teamname'];

	if ( strlen($teamname) > 10) {
		echo 'Team name too long!  <br> <a href="update.php">back</a>';
	} else {
		$duplicates = mysql_query("SELECT * FROM `league` WHERE `team`='$teamname'");
	    $samerows = mysql_num_rows($duplicates);
	    if ($samerows !== 0) {
	    echo 'Error! Team name already exists! <br> <a href="update.php">back</a>';
	    } else {
		mysql_query("INSERT INTO `league` (`team`) VALUES ('$teamname')") or die (mysql_error()) ;
		echo 'Team added! <br> <a href="update.php">back</a>';
		}
	}

?>

