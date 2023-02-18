jQuery(function() {

	$('.menu-btn').click(function() {
		$('body').toggleClass('fixed');
		$('.menu-btn__line01').toggleClass('open');
		$('.menu-btn__line02').toggleClass('open');
		$('.menu-btn__line03').toggleClass('open');
		$('.drower').toggleClass('open');
		$('.mask').toggleClass('fixed');
	});

	$(window).on('resize', function() {
		if (window.matchMedia("(min-width: 769px)").matches) {
	    //画面横幅が768px以下のときの処理
			$('body').removeClass('fixed');
	    $('.menu-btn__line01').removeClass('open');
		$('.menu-btn__line02').removeClass('open');
		$('.menu-btn__line03').removeClass('open');
		$('.drower').removeClass('open');
		$('.mask').removeClass('fixed');
	  } 
	});
	  
	let targets = document.querySelectorAll('.js-slidein-bottom');
	$(window).on('scroll load', function() {
		var scroll = window.scrollY; //スクロール量を取得
	  	var windowHeight = window.innerHeight; //画面の高さを取得
	  	for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
	    var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
	    if (scroll > targetPos - windowHeight + 200) { //スクロール量 > ターゲット要素の位置
	      target.classList.add('slideinbottom'); //is-animatedクラスを加える
	    }
	  }
	});

	let targets_fadein = document.querySelectorAll('.js-fadein');
	$(window).on('scroll load', function() {
		var scroll = window.scrollY; //スクロール量を取得
	  	var windowHeight = window.innerHeight; //画面の高さを取得
	  	for (let target of targets_fadein) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
	    var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
	    if (scroll > targetPos - windowHeight + 200) { //スクロール量 > ターゲット要素の位置
	      target.classList.add('fadein'); //is-animatedクラスを加える
	    }
	  }
	});

	let targets_slidein = document.querySelectorAll('.js-slidein');
	$(window).on('scroll load', function() {
		var scroll = window.scrollY; //スクロール量を取得
	  	var windowHeight = window.innerHeight; //画面の高さを取得
	  	for (let target of targets_slidein) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
	    var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
	    if (scroll > targetPos - windowHeight + 200) { //スクロール量 > ターゲット要素の位置
	      target.classList.add('slidein'); //is-animatedクラスを加える
	    }
	  }
	});
});