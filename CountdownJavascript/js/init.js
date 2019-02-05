//https://www.youtube.com/watch?v=u_6CqjQ-L8Q

function countDown(secs,elem) {
	//elem in this case equals div id="status"
	var element = document.getElementById(elem);
	element.innerHTML = "Please wait for " +secs+ " seconds";

	(secs = secs--);

	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
}

countDown(10,"status");