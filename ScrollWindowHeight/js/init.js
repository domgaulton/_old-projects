$(document).ready(function () {
	windowHeight = $(window).height();
	windowWidth = $(window).width();
	heightHalf = windowHeight / 2;

	$(".fsWindow").css("min-height", windowHeight+"px").css("max-width", windowWidth+"px");

	$(document).on("scrollstop",function(){
		
		offset = $(document).scrollTop();

		offset1 = $("#window1").offset().top;
		offset2 = $("#window2").offset().top;
		offset3 = $("#window3").offset().top;
		offset4 = $("#window4").offset().top;
		
		if (offset < heightHalf) {
			$(document).scrollTop(offset1);
		} else if ((offset > heightHalf) && (offset < (offset2 + heightHalf))) {
			$(document).scrollTop(offset2);
		} else if ((offset > (offset2 + heightHalf)) && (offset < (offset3 + heightHalf))){
			$(document).scrollTop(offset3);
		} else if ((offset > (offset3 + heightHalf)) && (offset < (offset4 + heightHalf))){
			$(document).scrollTop(offset4);
		}
	});

});


