// Generate Nameglow by Nando(10042001)

$(document).ready(function(){
	$(".nameglow").submit(function(e){
		e.preventDefault();
		var textname = $("[name=textname]").val();
		var nameglow = $("[name=nameglow]").val();
		if(textname == "" || nameglow == "") {
			alert("Fields cannot be empty!");
		} else {
			$(".view").html(textname);
			$(".view").css("text-shadow", "0 0 5px "+nameglow);
			$("[name=code]").val(textname+"(glow"+nameglow+")");
		}
	});
	
	$("[name=nameglow]").colorPicker({
		opacity: false
	});
});