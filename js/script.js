jQuery(function() {

	$('.menu-btn').click(function() {
		$('header').toggleClass('fixed');
		$('.menu-btn__line01').toggleClass('open');
		$('.menu-btn__line02').toggleClass('open');
		$('.menu-btn__line03').toggleClass('open');
		$('.drower').toggleClass('open');
		$('.mask').toggleClass('fixed');
	});

	$(window).on('resize', function() {
		if (window.matchMedia("(min-width: 769px)").matches) {
	    //画面横幅が768px以下のときの処理
			$('header').removeClass('fixed');
	    $('.menu-btn__line01').removeClass('open');
		$('.menu-btn__line02').removeClass('open');
		$('.menu-btn__line03').removeClass('open');
		$('.drower').removeClass('open');
		$('.mask').removeClass('fixed');
	  } 
	});
	  

});