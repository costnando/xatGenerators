// Generate Namecolor by Nando(10042001)

$(document).ready(function(){
	$(".namecolor").submit(function(e){
		e.preventDefault();
		var textname = $("[name=textname]").val();
		var nameglow = $("[name=nameglow]").val();
		var namecolor = $("[name=namecolor]").val();
		if(textname == "" || nameglow == "" || namecolor == "") {
			alert("Fields cannot be empty!");
		} else {
			$(".view").html(textname);
			$(".view").css("text-shadow", "0 0 5px "+nameglow);
			$(".view").css("color", namecolor);
			$("[name=code]").val(textname+"(glow"+nameglow+namecolor+")");
		}
	});
	
	$("[name=nameglow]").colorPicker();
	$("[name=namecolor]").colorPicker();
});