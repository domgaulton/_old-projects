$(document).ready(function() {
	minimized_length = 100;
	element = $(".fulltext").text();
	showmore = '</span> <a href="#" id="expand">&raquo; read more</a>';

	//shorten text
	if (element.length > minimized_length) {
		shortened_text = element.substring(0, minimized_length);
		$(".fulltext").text(shortened_text).append(showmore);
	};


	// expand text with link
	$("#expand").click(function() {
		wholetext = element.substring(0, element.length);
		wholetext.hide();
	});
});