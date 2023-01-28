// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class

// $(document).on('click', function(e) {
	// var $target = $(e.target);
// });// $(document).on('click')

	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

(function() {
	// ibg class
	if('objectFit' in document.documentElement.style === false){
	  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	    var image = el.querySelector('img');
	    el.style.backgroundImage = 'url("'+image.src+'")';
	    el.classList.add('ibg');
	    el.classList.remove('_fit');
		 });
	}
	// End ibg class

	document.addEventListener('click', function(e){
		console.log(e.target);
		var targ = e.target;

		// location panel toggle
		// END location panel toggle
	});

	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		// usage: http://ganlanyuan.github.io/tiny-slider/#usage
		if(document.querySelector('.my-slider') !== null){
			var slider = tns({
			container: '.my-slider',
			mode: 'carousel', //'gallery' - для фэйд-анимации отдельных слайдов
			items: 1,
			// slideBy: 1, // кол-во слайдов, перематывающихся за 1 клик. Не работает с mode: 'gallery'
			// autoplay: true,
			// controlsContainer: '.hits.carouseled .block-header__nav', // внутри .block-header__nav должны быть 2 заранее отстилизованные кнопки
			navContainer: "#customize-thumbnails",//конткйнер для навигации миниатюрами
			navAsThumbnails: true, //включение навигации миниатюрами
			mouseDrag: true,
			loop: false,
			gutter: 30 //добавляет padding, а не margin! Нужна обертка вокруг содержимого каждого слайда!

			});

			var navSlider = tns({
			container: '#customize-thumbnails',
			mode: 'carousel', //'gallery' - для фэйд-анимации отдельных слайдов
			items: 1,
			mouseDrag: true,
			loop: false,
			controls: false,
			nav: false,
			gutter: 30 //добавляет padding, а не margin! Нужна обертка вокруг содержимого каждого слайда!

			});
		}
		// console.log(Viewer)
		// const gallery = new Viewer(document.getElementById('gallery'), {
		// 	title: false,
		// 	toolbar: {
		// 	    prev: 4,
		// 	    next: 4
		// 	},
		// 	// fullscreen: false,
		// 	movable: false,
		// 	rotatable: false,
		// 	 filter(image) {
		// 	 	console.log(image.parentElement.parentElement.classList.contains('tns-slide-cloned'));
		// 	    // return !image.parentElement.parentElement.classList.contains('swiper-slide-duplicate');//для свайпера
		// 	    return !image.parentElement.parentElement.classList.contains('tns-slide-cloned');
		// 	    // return image.complete;
		// 	  },

		// });

		
	});
})();