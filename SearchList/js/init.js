$('#box').keyup(function(){
   var valThis = $(this).val().toLowerCase();
    if(valThis == ""){
        $('.navList > li').show();           
    } else {
        $('.navList > li').each(function(){
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
   };
});