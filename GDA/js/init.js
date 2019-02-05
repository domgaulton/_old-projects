/*

$(document).ready(function(){

	$.fn.myFunc = function(lower, upper) {
		var x = $(this).val();
		var feedback = $(this + "FB");
			if (x < lower) {
				$(this).css("background", "green");
			} else if (x > lower && x < upper) {
				$(this).css("background", "orange");
			} else if ( x > upper) {
				$(this).css("background", "red");
			}
		percent = Math.round((x / upper)*100);
		feedback.text(percent + "%");
	};

	$("#Energy").keyup(myFunc(800, 1999));

});

*/
$("#Energy").keyup(function (){
	var energy = $("#Energy").val();
	if (energy < 800) {
		$("#EnergyFB").css("background", "green");
	} else if (energy > 800 && energy < 1999) {
		$("#EnergyFB").css("background", "orange");
	} else if ( energy > 1999) {
		$("#EnergyFB").css("background", "red");
	};
	energyPercent = Math.round((energy / 20));
	$("#EnergyFB").text(energyPercent + "%");
});


$("#Fat").keyup(function (){
	var fat = $("#Fat").val();
	if (fat < 30) {
		$("#FatFB").css("background", "green");
	} else if (fat > 30 && fat < 69) {
		$("#FatFB").css("background", "orange");
	} else if (fat > 69) {
		$("#FatFB").css("background", "red");
	}
	fatPercent = Math.round((fat / 70)*100);
	$("#FatFB").text(fatPercent + "%");
});


$("#Saturates").keyup(function (){
	var saturates = $("#Saturates").val();
	if (saturates < 8) {
		$("#SaturatesFB").css("background", "green");
	} else if (saturates > 8 && saturates < 10) {
		$("#SaturatesFB").css("background", "orange");
	} else if (saturates > 19) {
		$("#SaturatesFB").css("background", "red");
	}
	saturatesPercent = Math.round((saturates / 20)*100);
	$("#SaturatesFB").text(saturatesPercent + "%");
});


$("#Sugars").keyup(function (){
	var sugars = $("#Sugars").val();
	if (sugars < 20) {
		$("#SugarsFB").css("background", "green");
	} else if (sugars > 20 && sugars < 89) {
		$("#SugarsFB").css("background", "orange");
	} else if (sugars > 89) {
		$("#SugarsFB").css("background", "red");
	}
	sugarsPercent = Math.round((sugars / 90)*100);
	$("#SugarsFB").text(sugarsPercent + "%");
});


$("#Salt").keyup(function (){
	var salt = $("#Salt").val();
	if (salt < 3) {
		$("#SaltFB").css("background", "green");
	} else if (salt > 3 && salt < 5.9) {
		$("#SaltFB").css("background", "orange");
	} else if (salt > 5.9) {
		$("#SaltFB").css("background", "red");
	}
	saltPercent = Math.round((salt / 6)*100);
	$("#SaltFB").text(saltPercent + "%");
});