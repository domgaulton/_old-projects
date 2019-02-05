//https://www.youtube.com/watch?v=vwJ6LKIVt5Y

$(document).ready(function () {
	$('li').hover(function() {
		//when you hover li it will look for child of ul then li
		$(this).find("ul>li").stop().fadeToggle(400);
	});
});