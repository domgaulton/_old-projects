function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e){
            $("#picture").attr("src", e.target.result);
            $("#picture").show();
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInput").change(function(){
    readURL(this);
});

$("#greyscale").click(function () {
	$("#picture").addClass("greyscale");
});