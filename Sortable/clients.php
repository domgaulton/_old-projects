<?php

    include 'functions.php';

    $username = $_POST['username'];
    $password = $_POST['password'];

if ($username && $password){

mysql_connect('localhost', 'dgaulton_t3st3r', 't3st3r') or die(mysql_error());
mysql_select_db('dgaulton_t3st') or die(mysql_error());

$query = mysql_query("SELECT * FROM loginUsers WHERE username='$username'");
$numrows = mysql_num_rows($query);

    if ($numrows == 1){
        while ($row = mysql_fetch_assoc($query)) {
            $dbusername = $row['username'];
            $dbpassword = $row['password'];

        }
        if ($username==$dbusername&&$password==$dbpassword){
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Clients</title>
    <link rel="stylesheet" type="text/css" href="style/table.css">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<table id="myTable" class="tablesorter"> 
<thead> 
<tr> 
    <th>ID</th> 
    <th>First Name</th> 
    <th>Surname</th> 
    <th>Email</th> 
    <th>DOB</th> 
    <th>Pension</th> 
    <th>Date</th> 
</tr> 
</thead> 
<tbody> 
    <?php clients() ?>
</tbody> 
</table> 

<div class="logInOut"><a href="index.php">logout</a></div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/tablesorter.js"></script>
<script type="text/javascript" src="js/table.js"></script>
</body>
</html>
<?php
        } else {
            die ("Incorrect password!");
        }

    } else {
        die ("Incorrect username!");
    }

} else {
    die("Please enter a username and a password!");
};

?>