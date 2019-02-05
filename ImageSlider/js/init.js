function Slider() {
	delayTime = 100;
	fadeSpeed = 1000;
	totalDelay = ((2 * fadeSpeed) + delayTime);

	// Slide effect
    //$(".slider #1").fadeIn(fadeSpeed);
    //$(".slider #1").delay(delayTime).hide("slide", { direciton:"left"}, fadeSpeed);

    // Fade effect
    $(".slider #1").fadeIn(fadeSpeed);
    $(".slider #1").delay(delayTime).fadeOut(fadeSpeed);


    //how many slides?
    slideCount = $(".slider img").size();
    count = 2;

    setInterval(function (){
    	//$(".slider #"+count).show("slide", {direction: "right"}, fadeSpeed);
    	//$(".slider #"+count).delay(delayTime).hide("slide", { direciton:"left"}, fadeSpeed);

    	$(".slider #"+count).fadeIn(fadeSpeed);
    	$(".slider #"+count).delay(delayTime).fadeOut(fadeSpeed);
    
    	
    	if (count == slideCount){
    		count = 1;
    	} else {
    		count = count + 1;
    	}
    }, totalDelay);
}﻿