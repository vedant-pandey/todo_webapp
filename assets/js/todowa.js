$('input[type=text]').on("keypress",function(evt){
	if (evt.which===13) {
		var inp = $(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> '+inp+'</li>');
	}
});

$('ul').on("click", "li" , function(){
	$(this).toggleClass("completed");
});

$('ul').on("click", "span", function(evt){
	$(this).parent().fadeOut(290,function(){
		$(this).remove();
	});
	evt.stopPropagation();
});

$('.fa-pencil-square-o').on("click",function(){
	$('input[type=text]').slideToggle(100);
	
});