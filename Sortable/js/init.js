

/********* FIRST NAME *********/

$('#firstname').focus(function () {
	$("#firstname_feedback").text("Enter your first name").css("color", "black");
});

$('#firstname').blur(function () {
	if ( !this.value ) {
		$("#firstname_feedback").text("You must enter a name").css("color", "red");
	} else {
		$("#firstname_feedback").html("&#10004;").css("color", "green");
	}
});

/********* SURNAME *********/

$('#surname').focus(function () {
	$("#surname_feedback").text("Enter your surname").css("color", "black");
});

$('#surname').blur(function () {
	if ( !this.value ) {
		$("#surname_feedback").text("You must enter your surname").css("color", "red");
	} else {
		$("#surname_feedback").html("&#10004;").css("color", "green");
	}
});

/********* Email *********/

$('#email').focus(function () {
	$("#email_feedback").text("Enter your email here").css("color", "black");
});

$('#email').blur(function () {
	if ($('#email').val() == "") {
		$("#email_feedback").text("");
	} else if (($('#email').val().indexOf("@") != -1) && ($('#email').val().indexOf(".") != -1)) {
		$("#email_feedback").html("&#10004;").css("color", "green");
	} else {
		$("#email_feedback").text("Must contain '@' and '.'").css("color", "red");
	}
});

/********* SURNAME *********/

$('#DOB').focus(function () {
	$("#DOB_feedback").text("DD/MM/YYYY").css("color", "black");
});

$('#DOB').blur(function () {
	if ( !this.value ) {
		$("#DOB_feedback").text("You must enter your DOB").css("color", "red");
	} else {
		$("#DOB_feedback").html("&#10004;").css("color", "green");
	}
});

/********* PENSION *********/

$('#pension').focus(function () {
	$("#pension_feedback").text("Enter your pension ammount").css("color", "black");
});

$('#pension').blur(function () {
	if ( !this.value ) {
		$("#pension_feedback").text("You must enter your pension ammount").css("color", "red");
	} else {
		$("#pension_feedback").html("&#10004;").css("color", "green");
	}
});
