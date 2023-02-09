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
			if(document.querySelector('.header') !== null){
				if(targ.classList.contains('loc-header__selected') || targ.closest('.loc-header__selected') !== null || targ.classList.contains('loc-header__panel') || targ.closest('.loc-header__panel')){
					document.body.classList.toggle('loc-header-opened');
						document.querySelector('.header').classList.remove('header-catalog-opened');
						if(screen.width > 959.98){
							coverHide();			
						}else{
							coverShow();			
						}
					}else{
					document.getElementById('header-location').classList.remove('opened');
				}
				if(targ.getAttribute('id') == 'city-list-opener'){
					console.log('city-list-opener')
					document.body.classList.add('cities-opened');
					document.body.classList.remove('loc-header-opened');
					coverShow();
				}
				// else if(targ.closest('.header__city-list') === null && targ.getAttribute('id') !== 'catalog-switcher' && targ.closest('#catalog-switcher') == null){
				// 	console.log('header__city-list')
				// 	document.querySelector('.header').classList.remove('cities-opened');
				// 	coverHide();			
				// }
				if(targ.getAttribute('id') == 'location-search-closer' || targ.closest('#location-search-closer') !== null){
					document.body.classList.remove('cities-opened');
					coverHide();			
				}
			}
		// END location panel toggle

		// header catalog toggle
			if(targ.getAttribute('id') === 'catalog-switcher' || targ.closest('#catalog-switcher') !== null){
					console.log('catalog-switcher')
				document.querySelector('.header').classList.toggle('header-catalog-opened');
				document.querySelector('.header').classList.remove('search-results-opened');
				document.documentElement.classList.toggle('lock');
				coverToggle();
			}

			if(window.innerWidth > 940 && isMobile.any()){// определяем, что клик с тач-скрина
				if(targ.classList.contains('.catalog-header__link') || targ.closest('.catalog-header__link') !== null){// убежаемся, что кликнкнули по стрелке рядом со ссылкой
					e.preventDefault();
					targ.closest('.catalog-header__item').classList.toggle('touch-hover');// родительскому пункту меню вешаем класс, который делает подменю открытым
					var sibls = siblings(targ.closest('.catalog-header__item'));
					for(var i=0; i < sibls.length; i++){
						removeClass(sibls[i], 'touch-hover');// вызов ф-ции. для удаления такого класса у соседних пунктов меню
					}			
				}
				if(!targ.closest('.catalog-header__item') && document.querySelector('.catalog-header__item.touch-hover') !== null){//провереряем клик вне выпадающего меню
					removeClass('.catalog-header__item', 'touch-hover');//удаляем у всех пунктов меню активный класс
				}
			}
			
		// END header catalog toggle

		// header search results toggle
			// var headerSearchInputs = document.querySelectorAll('.search-header__input');
			// for(var i=0; i < headerSearchInputs.length; i++){
			// 	headerSearchInputs[i].addEventListener('input', function(e) {
			// 		console.log('FOCUS')
			// 		document.querySelector('.header').classList.add('search-results-opened');
			// 		coverShow();
			// 	});
			// 	headerSearchInputs[i].addEventListener('blur', function(e) {
			// 		console.log('BLUR')
			// 		document.querySelector('.header').classList.remove('search-results-opened');
			// 		coverHide();
			// 	});
			// }
		// END header search results toggle

		
	});

	// body cover show/hide
		var body = document.body || document.getElementsByTagName('body')[0];
		function coverShow() {
					console.log('coverShow')
			body.classList.add('covered');
			document.documentElement.classList.add('lock');
		}

		function coverHide() {
			body.classList.remove('covered');
			document.documentElement.classList.remove('lock');
		}

		function coverToggle() {
			body.classList.toggle('covered');
		}
	// END body cover show/hide

	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');


		if(document.querySelector('.ctlg-filter__list') !== null){
			document.querySelector('.ctlg-filter__list').addEventListener('submit', function() {event.preventDefault()})

		}

		//---------------Swiper
		if(document.querySelector('.categories-tiles__slider') !== null){
			const categoriesTilesSlider = new Swiper('.categories-tiles__slider', {			
				observer: true,
				observeParents: true,
				pagination: false,
				navigation: false,
				breakpoints: {
    				// when window width is >= 320px
					320: {
						slidesPerView: 1.25,
						spaceBetween: 16
					},
    				// when window width is >= 480px
					576: {
						slidesPerView: 2.2,
						spaceBetween: 16
					},
   					 // when window width is >= 640px
					767.98: {
						slidesPerView: 3.2,
						spaceBetween: 16
					},
					959.98: {
						slidesPerView: 4,
						spaceBetween: 0
					}
				}
			});
		}

		if(document.querySelector('.main-slider__slider') !== null){
		  const mainSlider = new Swiper('.main-slider__slider', {
			observer: true,
			slidesPerView: 1,
		  	loop: true,

			  // If we need pagination
			  pagination: {
			  	el: '.swiper-pagination',
			  	type: 'bullets',
			  	clickable: true
			  },

			  // Navigation arrows
			  navigation: {
			  	nextEl: '.main-slider .slider-nav--prev',
			    prevEl: '.main-slider .slider-nav--next'
			  }
			});
		}


		if(document.querySelector('.popular__slider') !== null){
			const popularSlider = new Swiper('.popular__slider', {			
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				// Navigation arrows
				navigation: {
					nextEl: '.popular .slider-nav--prev',
					prevEl: '.popular .slider-nav--next'
				},
				breakpoints: {
    				// when window width is >= 320px
					320: {
						slidesPerView: 3,
						spaceBetween: 9
					},
    				// when window width is >= 480px
					576: {
						slidesPerView: 4,
						spaceBetween: 16
					},
   					 // when window width is >= 640px
					767.98: {
						slidesPerView: 5,
						spaceBetween: 16
					},
					959.98: {
						slidesPerView: 6,
						spaceBetween: 15
					}
				}
			});
		}

		if(document.querySelector('.news__slider') !== null){
			const newsSlider = new Swiper('.news__slider', {			
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				// Navigation arrows
				navigation: {
					nextEl: '.news .slider-nav--prev',
					prevEl: '.news .slider-nav--next'
				},
				breakpoints: {
    				// when window width is >= 320px
					320: {
						slidesPerView: 2,
						spaceBetween: 10
					},
    				// when window width is >= 480px
					576: {
						slidesPerView: 3,
						spaceBetween: 16
					},
   					 // when window width is >= 640px
					// 767.98: {
					// 	slidesPerView: 5,
					// 	spaceBetween: 16
					// },
					959.98: {
						slidesPerView: 4,
						spaceBetween: 16
					}
				}
			});
		}
		//---------------END Swiper


		// catalog-filter address list toggle
			if(document.querySelector('.ctlg-filter-location__selected') !== null){
				var addressToggler = (function() {
					var addressSelect = document.querySelector('.ctlg-filter-location__selected'),
						addressDropdown = addressSelect.nextElementSibling,
						addressInputs = addressDropdown.querySelectorAll('input.ctlg-filter__checkbox'),
						resultContainer = addressSelect.querySelector('.ctlg-filter-location__value'),
						checkedInputs = [];

					init = function() {
						checkedDetect();
						events();
					}
					checkedDetect = function() {
						for (var i = addressInputs.length - 1; i >= 0; i--) {
								console.log(addressInputs[i].checked)
							if(addressInputs[i].checked){
								console.log(addressInputs[i].closest('.ctlg-filter__label').querySelector('.ctlg-filter__value').textContent)
								checkedInputs.push(addressInputs[i].closest('.ctlg-filter__label').querySelector('.ctlg-filter__value').textContent);
							}
						}
						textContentFormater();
					}
					textContentFormater = function() {
						if(checkedInputs.length === 1){
							textContentRender(checkedInputs[0]);
						}else if(checkedInputs.length > 1){
							textContentRender('в ' + checkedInputs.length + ' ' + 'магазинах' );
						}else{
							textContentRender('В любом из магазинов');
						}
					}
					textContentRender = function(text) {
						resultContainer.textContent = text;

					}
					events = function() {
						addressSelect.addEventListener('click', dropdownToggle);
						document.addEventListener('click', function(e) {
								if(e.target.closest('.ctlg-filter-location') == null){
								document.querySelector('.ctlg-filter-location')
									.classList.remove('ctlg-filter-location--opened');
							}
						});
						for (var i = addressInputs.length - 1; i >= 0; i--) {
							addressInputs[i].addEventListener('change', this.inputCheck)
						}
					}
					inputCheck = function(e) {
						checkedInputs = [];
						checkedDetect();
					}
					dropdownToggle = function(e) {
						e.target.closest('.ctlg-filter-location')
							.classList.toggle('ctlg-filter-location--opened');
					}

					init();

				})();

			}
		// END catalog-filter address list toggle

		// noUiSlider
		if(document.querySelector('.ctlg-filter__range') !== null){
			// for many Sliders
			var readySlidersArr = [];//массив всех слайдеров для доступа программно

			Array.prototype.slice.call(document.querySelectorAll('.range')).forEach(function(rangeBlock) {
				var slider = rangeBlock.querySelector('.range-slider'),
				inputMin = rangeBlock.querySelector('[data-minval]'),
				inputMax = rangeBlock.querySelector('[data-maxval]');
								//var widthKeff = 10; //если нужно динамически менять ширину инпутов 
				console.log(inputMax.value)
				var noUi = noUiSlider.create(slider, {
					connect: true,
					behaviour: 'tap',
					start: [+inputMin.value, +inputMax.value],
					tooltips: slider.dataset.units ? true : false, //добавление туллтипов в случае наличия в хтмл соответствующих аттрибутов
					range: {
						min: 0,
						max: +slider.dataset.maxval
					},
					format: wNumb({//закомментировать, если используется встроеное форматирование с исп-ем. единиц измерения (например, "руб.")
						decimals: 0,
						thousand: ' '
					})
				});

				slider.noUiSlider.on('update', getValues);
				slider.noUiSlider.on('set', getValues);

				function getValues() {
					console.log(slider.noUiSlider.get()[0])
					inputMin.value = (slider.noUiSlider.get()[0]);
					inputMax.value = (slider.noUiSlider.get()[1]);			
								// inputMin.style.width = ((inputMin.value.length + 1) * widthKeff) + 'px';//для динамической ширины инпутов
								// inputMax.style.width = ((inputMax.value.length + 1) * widthKeff) + 'px';//для динамической ширины инпутов
							}

							inputMax.addEventListener('change', function() {
								slider.noUiSlider.set([null, +inputMax.value]);
								// this.style.width = ((this.value.length + 1) * widthKeff) + 'px';//для динамической ширины инпутов
							});
							inputMin.addEventListener('change', function() {
								console.log('min change!')
								slider.noUiSlider.set([+inputMin.value, null]);
								// this.style.width = ((this.value.length + 1) * widthKeff) + 'px';//для динамической ширины инпутов
							});
							readySlidersArr.push(noUi);
						});

		}
		// END noUiSlider

		// new SimpleBar(document.querySelector('.catalog-header__nav'), { autoHide: false });

		// header fixed on doc. scroll
			if(document.querySelector('.header') !== null){
				var headerElem = document.querySelector('.header'),
				observerCallback = function(entries, observer) {
					console.log(entries);
					if(entries[0].isIntersecting){
						headerElem.classList.remove('_scroll');
					}else{
						headerElem.classList.add('_scroll');
					}
				};
				var headerObserver = new IntersectionObserver(observerCallback);
				headerObserver.observe(headerElem);			
			}
		// END header fixed on doc. scroll

		

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