$(document).ready(function(){
	var $credits = $('#credits');
	var $landing = $('#landing');
	var $title = $('#title');
	var $button = $('.enter');
	var $game = $('#game');

	function creditsFade(){
		$credits.fadeIn(3000);
		$credits.delay(1000).fadeOut(3000, titleScreen).css('display:none');	
	};

	function titleScreen(){
		$landing.fadeIn(3000);
		$title.fadeIn(3000);
	};

	function errorFade(){
		$game.fadeIn(1000);
	}

	creditsFade();
	
	$button.click(function(){
		$title.fadeOut(1000, errorFade).css('display:none');
	});
});