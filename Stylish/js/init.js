jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2.1) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2.1) + $(window).scrollLeft()) + "px");
    return this;
}

jQuery.fn.topLeft = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 4) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 4.2) + $(window).scrollLeft()) + "px");
    return this;
}

jQuery.fn.botRight = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 1.2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 1.35) + $(window).scrollLeft()) + "px");
    return this;
}


$(document).ready(function () {
	$(".tL").topLeft().fadeIn(2000);
	$(".middle").center().fadeIn(2000);
	$(".bR").botRight().fadeIn(2000);
})
