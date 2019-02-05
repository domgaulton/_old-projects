$(document).ready(function() {

$("#messageBox").animate({ scrollTop: $('#messageBox')[0].scrollHeight}, 200);

//$("#messageBox").load("post.php").show();
//$("#messageBox").load("recieve.php").show();

	var postMessage = function(){
		var message = $("#writeMessage").val();

		if (message.length > 0){
			$.ajax({
				type: "POST",
				url: 'post.php',
				data: message,
				success: function() {
					$("#messageBox").append("<div class='message sent'>" + message + "<div/>");
					$("#writeMessage").val("");
					$("#messageBox").animate({ scrollTop: $('#messageBox')[0].scrollHeight}, 1000);	
				},
  				error: function(){
					alert('Error sending message, please try again.');
				}
			});	
		}
	};
	
	$("#submitBtn").click(function(){
		postMessage();
	});

	$('#writeMessage').keyup(function(event){
 
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			postMessage();
		}
 
});

});