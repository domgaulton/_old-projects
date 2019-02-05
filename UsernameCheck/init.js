$(document).ready(function(){
	
	$("#feedback").load("check.php").show();

	$("#username_input").keyup(function() {
		$.post("check.php", { username: form.username.value }, 
		function(result) {
			$("#feedback").html(result).show();
		})
	});
});