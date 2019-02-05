var dimension = setupDimension2();
var gameLength = setupGameLength();
var table;
var cells;
var windowHeight = $(window).height();

$(document).ready(function() {
	table = $("#main");
	setupTable();
	cellWidth();
	cells = table.find("td");
	assignLetter();
	timer();
});

function setupDimension2(){
	var dime = prompt("How many wide? (2 - 6)");
	if (dime < 6 && dime > 2){
		return dime;
	} else {
		alert ("2-6");
		setupDimension2();
	}
};

function setupDimension(){
	var dimension = prompt("How many wide? (2 - 6)");
	if (dimension > 6 || dimension < 2){
		alert("Default 4x4 game set up");
		dimension = 4;
	};
	return dimension;
};

function setupGameLength(){
	var gameLength = prompt("How many seconds to play for? ( 10 - 60 )");
	if (gameLength > 60 || gameLength < 10) {
		alert("Game set for 1 minute");
		gameLength = 60;
	};
	return gameLength;
};

function setupTable(){
var gameTable = [];
	for (var y = 0; y < dimension; y++) {
		gameTable.push('<tr>');
		for (var x = 0; x < dimension; x++) {
			gameTable.push("<td id=" + tableID() + "></td>");
			function tableID() {
				var i = Math.floor(1+(Math.random() * 150));
				return i;
			}
		}
		gameTable.push('</tr>');
	}
	gameTable = gameTable.join('');
	table.append($(gameTable));
}

function cellWidth(){
	windowHeight = (windowHeight * 0.8);
	var cellHeight = windowHeight / dimension;
	$("#main tr td").css("width", cellHeight+"px").css("height", cellHeight+"px").css("font-size", (cellHeight * 0.5)+"px");
}

function assignLetter(){
	cells.each(function() {
		var id = ($( this ).attr("id"));
		if (id > 0 && id < 20) {
			$(this).text("E");
		}
		if (id >= 20 && id < 33) {
			$(this).text("T");
		}
		if (id >= 33 && id < 45) {
			$(this).text("A");
		}
		if (id >= 45 && id < 57) {
			$(this).text("R");
		}
		if (id >= 57 && id < 68) {
			$(this).text("I");
		}
		if (id >= 68 && id < 79) {
			$(this).text("N");
		}
		if (id >= 79 && id < 90) {
			$(this).text("O");
		}
		if (id >= 90 && id < 99) {
			$(this).text("S");
		}
		if (id >= 99 && id < 105) {
			$(this).text("D");
		}
		if (id >= 105 && id < 110) {
			$(this).text("C");
		}
		if (id >= 110 && id < 115) {
			$(this).text("H");
		}
		if (id >= 115 && id < 120) {
			$(this).text("L");
		}
		if (id >= 120 && id < 124) {
			$(this).text("F");
		}
		if (id >= 124 && id < 128) {
			$(this).text("M");
		}
		if (id >= 128 && id < 132) {
			$(this).text("P");
		}
		if (id >= 132 && id < 136) {
			$(this).text("U");
		}
		if (id >= 136 && id < 139) {
			$(this).text("G");
		}
		if (id >= 139 && id < 142) {
			$(this).text("Y");
		}
		if (id >= 142 && id < 144) {
			$(this).text("W");
		}
		if (id == 144) {
			$(this).text("B");
		}
		if (id == 145) {
			$(this).text("J");
		}
		if (id == 146) {
			$(this).text("K");
		}
		if (id == 147) {
			$(this).text("Qu");
		}
		if (id == 148) {
			$(this).text("V");
		}
		if (id == 149) {
			$(this).text("X");
		}
		if (id == 150) {
			$(this).text("Z");
		}
	});
}

function timer(){
	$("#main").delay(gameLength*1000).fadeOut(500);
}
