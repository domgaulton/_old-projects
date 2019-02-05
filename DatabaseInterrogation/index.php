<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>
<title>jQuery</title> 
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">

function get() {
	//http://api.jquery.com/jquery.post/
	//Example: Request the test.php page and send some additional data along (while still ignoring the return results).
	//$.post( "test.php", { name: "John", time: "2pm" } );

	$.post("data.php", { name: form.name.value}, 
		function (output) {
			$("#age").html(output).fadeIn(5000);
		});
};

</script>
</head>

<body> 
<p>
<form name="form">
	<input type="text" name="name">
	<input type="button" value="Get" onClick="get();">
</form>
</p>

<p>
	<div id="age">
	</div> 
</p>

</body>

</html>