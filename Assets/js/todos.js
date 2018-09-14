//Check Off Specific Todos By Clicking
// $("ul").on("click", "li" this will allow the code
// to listen for exisitng/new code that will be entered
// in within the ul that is li
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	//.parent chooses the li of the span that was click on
	//call back to fadout 1000 milsecs to start then removes
	// the line from storage to improve speed
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	//stops the span from bubblying up to other elements
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul the append method allows
		// a string to be added to what we select (ul)
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")	
	}
});

