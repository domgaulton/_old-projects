$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left:'250px',
      opacity:'0.5',
      height:'+=10px',
      width:'150px'
    });
  });

  $("input").click(function(){
    $("#square").animate({height:'300px',opacity:'0.4'},"fast");
    $("#square").animate({width:'300px',opacity:'0.8'},"slow");
    $("#square").animate({height:'100px',opacity:'0.4'},"fast");
    $("#square").animate({width:'100px',opacity:'0.8'},"slow");
  });


});

