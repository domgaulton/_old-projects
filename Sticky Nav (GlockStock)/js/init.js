$(document).ready(function() {
	var navOffset = $(".menu").offset().top;

	$(".menu").wrap('<div class="nav-placeholder"></div>');
	$(".nav-placeholder").height($(".menu").outerHeight());
	
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		
		if (scrollPos >= navOffset) {
			$(".menu").css("position", "fixed").css("top", "0px");
		} else {
			$(".menu").css("position", "relative");
		}
	});
});