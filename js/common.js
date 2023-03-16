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

		// open/close catalog-sort__select fstdropdown
		if(targ.classList.contains('catalog-sort__select') || targ.closest('.catalog-sort__select') !== null){
			// console.log(targ.closest('.catalog-sort__select').querySelector('.fstdiv').classList.contains('open'));
			// if(targ.closest('.catalog-sort__select').querySelector('.fstdiv').classList.contains('open')){
			// 	document.body.classList.add('covered');
			// }else{
			// 	document.body.classList.remove('covered');

			// }
		}
		// END open/close catalog-sort__select fstdropdown

		// catalog product availabel modal open
		if(targ.hasAttribute('data-modal-availability')){
			e.preventDefault();
			document.body.classList.add('catalog-availability-modal-visible', 'covered');
		}
		if(targ.hasAttribute('data-modal-address')){
			e.preventDefault();
			document.body.classList.add('address-modal-visible', 'covered');
		}
		
		// END catalog product availabel modal open

		// breadcrumbs mobile toggle
		if(targ.classList.contains('back-link') || targ.closest('.back-link') !== null && screen.width <= 969.98){
			e.preventDefault();
			document.body.classList.toggle('breadcrumbs-mobile-visible');
			document.documentElement.classList.toggle('lock');
			// setTimeout(function() {
				document.body.classList.toggle('covered');

			// }, 500)
		}
		
		// END breadcrumbs mobile toggle

		// page-catalog-filter toggle
		if(targ.hasAttribute('data-catalogfilter-open')){
			document.body.classList.add('page-catalog-filter-opened');
			// document.querySelector('.page-catalog__filter').classList.add('opened');
		}
		if(targ.hasAttribute('data-catalogfilter-close') || targ.closest('[data-catalogfilter-close]') !== null){
			document.body.classList.remove('page-catalog-filter-opened');
		}	
		// END page-catalog-filter toggle
		
		// mob-catalog filter toggle
		if(targ.classList.contains('mob-catalog-filter__item')){
			targ.classList.add('active');
			siblings(targ).forEach(function(elem) {
				removeClass(elem, 'active');
			});
		}
		// END mob-catalog filter toggle

		// location panel toggle
			if(document.querySelector('.header') !== null){
				if(targ.classList.contains('loc-header__selected') || targ.closest('.loc-header__selected') !== null || targ.classList.contains('loc-header__panel') || targ.closest('.loc-header__panel')){
					
					// mob-catalog panel close and reset
						panel.close();
						panel.reset();

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
				var catMenuItems = document.querySelectorAll('.catalog-header__item'),
					kiHeader = document.querySelector('.header');
				
				for (var i = catMenuItems.length - 1; i >= 0; i--) {
					catMenuItems[i].classList.remove('visible');
				}
				if(!kiHeader.classList.contains('header-catalog-opened')){
					// scrollTo is the same
					window.scroll({
					  top: 0, 
					  left: 0, 
					  behavior: 'smooth'
					});

				}
				if(kiHeader.classList.contains('header-catalog-opened')){
					coverHide();
				}else{

					coverShow();
				}
				kiHeader.classList.toggle('header-catalog-opened');
				kiHeader.classList.remove('search-results-opened');

	
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
		
		// popups close
			if(targ.classList.contains('popup__close') || targ.closest('.popup__close') !== null){
				console.log(targ.closest('.popup__close').parentElement.classList[1] + '-visible')
				console.log(document.body);
				document.body.classList.remove(targ.closest('.popup__close').closest('.popup').classList[1] + '-visible');
			}		
		// END popups close

		// product-cards alignment
			if(targ.classList.contains('catalog-sort__action') || targ.closest('.catalog-sort__action') !== null){
				targ.closest('.catalog-sort__action').classList.add('active');
				siblings(targ.closest('.catalog-sort__action'))[0].classList.remove('active');

				var pordictCardsContainers = targ.closest('.catalog-chapter')
					.querySelectorAll('.product-cards');
				
				if(targ.getAttribute('id') === 'cars-row-switcher' || targ.closest('#cars-row-switcher') !== null){
					for (var i = pordictCardsContainers.length - 1; i >= 0; i--) {
						pordictCardsContainers[i].classList.add('product-cards--horisontal');
					}
				}else{
					for (var i = pordictCardsContainers.length - 1; i >= 0; i--) {
						pordictCardsContainers[i].classList.remove('product-cards--horisontal');
					}
				}

			}
		// END product-cards alignment


		// map modals toggle
		if(targ.classList.contains('side-modal__close') || targ.closest('.side-modal__close') !== null){
			var visibleClass = e.target.closest('.side-modal').dataset.visibleClass;
			console.log(visibleClass)
			if(screen.width >= 959.98){
				document.body.classList.remove(visibleClass, 'side-modal-visible', 'map-with-modal', 'fullscreen-map-visible', 'covered');
			}else{
				document.body.classList.remove(visibleClass, 'side-modal-visible', 'map-with-modal', 'covered');
			}
		}
		if(targ.classList.contains('map-fullscreen__close') || targ.closest('.map-fullscreen__close') !== null){
			document.body.classList.remove('fullscreen-map-visible');
		}
		if(targ.classList.contains('side-modal__to-map') || targ.closest('.side-modal__to-map') !== null){
			if(screen.width >= 959.98){
				document.body.classList.add('fullscreen-map-visible', 'map-with-modal');
			}else{
				document.body.classList.remove(targ.closest('.side-modal').dataset.visibleClass, 'side-modal-visible', 'map-with-modal');
				document.body.classList.add('fullscreen-map-visible', 'map-with-modal');
			}
		}
		if(targ.classList.contains('map-fullscreen__back') || targ.closest('.map-fullscreen__back') !== null){
			document.body.classList.remove(targ.closest('.map-fullscreen__back').dataset.modal, 'side-modal-visible', 'map-with-modal', 'covered');
			document.body.classList.remove('fullscreen-map-visible');
		}

		// delivery-point-modal open/close
		if(targ.getAttribute('id') === 'delivery-point-select'){
			document.body.classList.add('delivery-point-modal-visible');
		}
		if(targ.getAttribute('id') === 'delivery-point-close'){
			document.body.classList.remove('delivery-point-modal-visible', 'fullscreen-map-visible', 'map-with-modal', 'side-modal-visible', 'covered');
		}
		if(targ.getAttribute('id') === 'delivery-points-list-close'){
			document.body.classList.remove('delivery-modal-visible', 'fullscreen-map-visible', 'map-with-modal', 'covered', 'side-modal-visible');
		}
		// END delivery-point-modal open/close
		
		if(targ.classList.contains('address-list__img') || targ.closest('.address-list__img') !== null /*&& targ.closest('.availability-modal') !== null*/){
			document.body.classList.remove('catalog-availability-modal-visible');
			document.body.classList.add('address-modal-single-visible', 'map-with-modal', 'fullscreen-map-visible');
		}
		if(targ.classList.contains('side-modal__back') || targ.closest('.side-modal__back') !== null){
			console.log('click')
			if(targ.closest('.address-side-modal--single') !== null){
				document.body.classList.remove('address-modal-single-visible');
				document.body.classList.add('catalog-availability-modal-visible');
			}
		}
		// END map modals toggle

		// widemodals hide
		if(targ.classList.contains('widemodal__close') || targ.closest('.widemodal__close') !== null){
			targ.closest('.widemodal').classList.add('modal-hide');
			document.body.classList.remove('lock');
		}
		// END widemodals hide

		// review-body expand/collapse
		if(targ.classList.contains('review__collapse') || targ.closest('.review__collapse')){
			targ.closest('.review').querySelector('.review__body')
				.classList.toggle('review__body--expanded');
			console.log(targ.textContent)
			targ.textContent = targ.textContent.toLowerCase() ==='свернуть' ? 'Читать полностью' : 'Свернуть';
		}	
		// END review-body expand/collapse

		// review context menu
		if(targ.classList.contains('review__context') || targ.closest('.review__context ')){
			if (isMobile.any()) {
				targ.closest('.review').classList.toggle('review-context-visible');
				if (screen.width <= 959.98){
					document.body.classList.toggle('covered');

				}
			}
		}
		// ENDreview context menu

		// profile-menu toggle
		if(targ.getAttribute('id') ==='profile-menu-open' || targ.closest('#profile-menu-open') !== null){
			e.preventDefault();
			document.body.classList.toggle('profile-nav-visible');
			document.documentElement.classList.toggle('lock');
		}
		
		//END profile-menu toggle


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

		
	});//document click

	// body cover show/hide
		var body = document.body || document.getElementsByTagName('body')[0];
		function coverShow() {
					console.log('coverShow')
			body.classList.add('covered');
			// document.documentElement.classList.add('lock');
		}

		function coverHide() {
			body.classList.remove('covered');
			// document.documentElement.classList.remove('lock');
		}

		function coverToggle() {
			body.classList.toggle('covered');
		}
	// END body cover show/hide

	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');

		// catalog hover
			if(document.querySelectorAll('.catalog-header__item') !== null){

				var catalogLinks = document.querySelectorAll('.catalog-header__item');

				var hi = new SV.HoverIntent(catalogLinks, {
					// required parameters
					onEnter: function(targetItem, related) {
						// console.log(targetItem)
						// console.log(related)
						targetItem.classList.add('visible');
						siblings(targetItem).forEach(function(sible) {
							sible.classList.remove('visible');
						}); 
					},
					onExit: function(targetItem, related) {
						// console.log(targetItem)
						// console.log(related)
						if(related){
							return;
						}
						targetItem.classList.remove('visible');
						// related.closest('.catalog-header__item').classList.remove('visible');
					},

					// default options'target ' + 
					exitDelay: 400,
					interval: 100,
					sensitivity: 7,
				});
			}
		// END catalog hover

		if(document.querySelector('.ctlg-filter__list') !== null){
			document.querySelector('.ctlg-filter__list').addEventListener('submit', function() {event.preventDefault()})

		}

		//---------------Swiper
		if(document.querySelector('.mob-catalog-screen__slider') !== null){
			const mobCatalogScreen = new Swiper('.mob-catalog-screen__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 3.25,
				spaceBetween: 10,
				loop: true,
				// breakpoints: {
   				//  // when window width is >= 320px
				// 	320: {
				// 		slidesPerView: 2,
				// 		spaceBetween: 20
				// 	},
    			// 	// when window width is >= 480px
				// 	480: {
				// 		slidesPerView: 3,
				// 		spaceBetween: 30
				// 	},
    			// 	// when window width is >= 640px
				// 	640: {
				// 		slidesPerView: 4,
				// 		spaceBetween: 40
				// 	}
				// },

  				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				}
			});
		}
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
		  	spaceBetween: 16,
		  	breakpoints: {
				// when window width is >= 320px
				
				 // when window width is >= 640px
				767.98: {
					slidesPerView: 1.325,
					spaceBetween: 16
				}
			},

			  // If we need pagination
			  pagination: {
			  	el: '.swiper-pagination',
			  	type: 'bullets',
			  	clickable: true
			  },

			  // Navigation arrows
			  navigation: {
			  	prevEl: '.main-slider .slider-nav--prev',
	     		nextEl: '.main-slider .slider-nav--next'
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
					nextEl: '.popular .slider-nav--next',
					prevEl: '.popular .slider-nav--prev'
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
					prevEl: '.news .slider-nav--prev',
					nextEl: '.news .slider-nav--next'
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

		//---------------product-card-nav
		if(document.querySelector('.screen-product-thumbs') !== null){
			  var screenProductNav = new Swiper('.screen-product-thumbs', {
			 	observer: true,
				observeParents: true,
				slidesPerView: 5,
				spaceBetween: 16,

			  // Navigation arrows
			  navigation: {
			  	nextEl: '.swiper-button-next',
			  	prevEl: '.swiper-button-prev',
			  }
			});
		}
		//---------------END product-card-nav
		
		//---------------product-card-screen
		if(document.querySelector('.screen-product-slider') !== null){
			var screenProductSwiper = new Swiper('.screen-product-slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				loop: true,
				pagination: {
				  	el: '.swiper-pagination',
				  	type: 'bullets',
				  	clickable: true
				},
		    	thumbs: {
		    		swiper: screenProductNav
		    	}
			});
		}
		//---------------END product-card-screen

		//---------------review-photos-slider
		if(document.querySelector('.review-photos-slider') !== null){
			var reviewPhotosSwiper = new Swiper('.review-photos-slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 8,
				loop: true,
				watchSlidesProgress: true,//предотвращает прокрутку слайдов при клике на ссылку внутри слайда
				navigation: {
					nextEl: '.product-reviews__photos .slider-nav--next',
					prevEl: '.product-reviews__photos .slider-nav--prev'
				}
				// breakpoints: {
				//     // when window width is >= 320px
				//     576: {
				//     	slidesPerView: 3,
				//     	spaceBetween: 20
				//     }
				// }
				
	    	});
		}
		//---------------END review-photos-slider

		//--------------compare-slider
		if(document.querySelector('.compare-cards') !== null){
			var compareCardsSlider = new Swiper('.compare-cards', {
				observer: true,
				observeParents: true,
				// slidesPerView: 2,
				spaceBetween: 11,
				 grabCursor: true,
				watchSlidesProgress: true,
				breakpoints: {
				    // when window width is >= 320px
				    320: {
				    	slidesPerView: 2,
					    spaceBetween: 11
				    },

				    // when window width is >= 480px
				    480: {
				    	slidesPerView: 2,
					    spaceBetween: 16
				    },
				    767.98: {
					    spaceBetween: 16,
				    	slidesPerView: 3
				    },
				    // when window width is >= 640px
				    959.98: {
				    	slidesPerView: 4,
				    	spaceBetween: 16
				    }
				}
			});
			var compareTableSlider = new Swiper('.compare-table', {
				observer: true,
				observeParents: true,
				// slidesPerView: 2,
				spaceBetween: 11,
				 grabCursor: true,
				// watchSlidesProgress: true,
				breakpoints: {
				    // when window width is >= 320px
				    320: {
				    	slidesPerView: 2,
					    spaceBetween: 11
				    },

				    // when window width is >= 480px
				    480: {
				    	slidesPerView: 2,
					    spaceBetween: 16
				    },
				    767.98: {
					    spaceBetween: 16,
				    	slidesPerView: 3
				    },
				    // when window width is >= 640px
				    959.98: {
				    	slidesPerView: 4,
				    	spaceBetween: 16
				    }
				}
			});
			compareTableSlider.controller.control = compareCardsSlider;
			compareCardsSlider.controller.control = compareTableSlider;
			// compareCardsSlider.on('sliderMove', function() {compareTableSlider.slideTo(compareCardsSlider.realIndex)});
			// compareTableSlider.on('sliderMove', function() {compareCardsSlider.slideTo(compareTableSlider.realIndex)});
		}
		//---------------END compare-slider
		//---------------END Swiper

		// baguetteBox
			if(document.querySelector('.gallery') !== null){
				baguetteBox.run('.gallery', {
					 captions: function(element) {
				        return'<button type="button" class="photo-remove">'+
                                '<svg class="icon icon-remove ">'+
                                  '<use xlink:href="img/icons-svg/symbol/sprite.svg#remove"></use>'+
                                '</svg>'+
                          '</button>';
				    }
					
				});
			}
		// END baguetteBox


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
					// console.log(entries);
					if(entries[0].isIntersecting){
						headerElem.classList.remove('_scroll');
						if (document.querySelector('.page-compare__cards') !== null) {
							document.querySelector('.page-compare__cards').classList.remove('_scroll');
						}
					}else{
						headerElem.classList.add('_scroll');
						if (document.querySelector('.page-compare__cards') !== null) {
							document.querySelector('.page-compare__cards').classList.add('_scroll');
						}
					}
				};
				var headerObserver = new IntersectionObserver(observerCallback);
				headerObserver.observe(headerElem);			
			}
		// END header fixed on doc. scroll

		// compare slider fixed on doc. scroll
					
			// if(document.querySelector('.page-compare__cards') !== null){
			// 	var compareSlider = document.querySelector('.cards-page-compare__check'),
			// 	compareObserverCallback = function(entries, observer) {
			// 		console.log(entries);
			// 		if(entries[0].isIntersecting){
			// 			document.querySelector('.page-compare__cards').classList.remove('_scroll');
			// 		}else{
			// 			document.querySelector('.page-compare__cards').classList.add('_scroll');
			// 		}
			// 	};
			// 	var compareObserver = new IntersectionObserver(compareObserverCallback);
			// 	compareObserver.observe(compareSlider);			
			// }
		// END compare slider fixed on doc. scroll

		

		// usage: http://ganlanyuan.github.io/tiny-slider/#usage
		// if(document.querySelector('.my-slider') !== null){
		// 	var slider = tns({
		// 	container: '.my-slider',
		// 	mode: 'carousel', //'gallery' - для фэйд-анимации отдельных слайдов
		// 	items: 1,
		// 	// slideBy: 1, // кол-во слайдов, перематывающихся за 1 клик. Не работает с mode: 'gallery'
		// 	// autoplay: true,
		// 	// controlsContainer: '.hits.carouseled .block-header__nav', // внутри .block-header__nav должны быть 2 заранее отстилизованные кнопки
		// 	navContainer: "#customize-thumbnails",//конткйнер для навигации миниатюрами
		// 	navAsThumbnails: true, //включение навигации миниатюрами
		// 	mouseDrag: true,
		// 	loop: false,
		// 	gutter: 30 //добавляет padding, а не margin! Нужна обертка вокруг содержимого каждого слайда!

		// 	});

		// 	var navSlider = tns({
		// 	container: '#customize-thumbnails',
		// 	mode: 'carousel', //'gallery' - для фэйд-анимации отдельных слайдов
		// 	items: 1,
		// 	mouseDrag: true,
		// 	loop: false,
		// 	controls: false,
		// 	nav: false,
		// 	gutter: 30 //добавляет padding, а не margin! Нужна обертка вокруг содержимого каждого слайда!

		// 	});
		// }
		if(document.getElementById('product-image-gallery') !== null){
			var gallery = new Viewer(document.getElementById('product-image-gallery'), {
				title: false,
				toolbar: {
				    prev: 2,
				    next: 2
				},
				fullscreen: false,
				movable: false,
				rotatable: false,
				zoomable: false,
				 filter(image) {
				 	// console.log(image.parentElement.parentElement.classList.contains('swiper-slide-duplicate'));
				    // return !image.parentElement.parentElement.classList.contains('swiper-slide-duplicate');//для свайпера
				    if(screen.width >= 767.98){
				    	return !image.parentElement.classList.contains('swiper-slide-duplicate');
				    }else{
				    	return false;
				    }
				    // return image.complete;
				  },

			});

		}

		
	});//DOMContentLoaded
})();