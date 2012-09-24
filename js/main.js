// console.log("main.js is loded");
// $("img").width(200);

$(document).ready(function(){
	$("li").on("click",function(){
		if ($(this).hasClass("done")){
			$(this).removeClass("done");
		}
		else
			$(this).addClass("done");
      //$("li").addClass("done");
	});
	$("img").on("dblclick", function(){
	$("img").width(200);
	$("#rahul").hide();
	$(".booboo").slideUp();

	});
	// $("img").click(function(){
	// 	$("img").width(100);
	// });
});