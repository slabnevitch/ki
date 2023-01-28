// Открытие и закрытие выпадающих меню на тач-устройствах
document.addEventListener('click', function(e) {
	var targetEl = e.target;
	if(window.innerWidth > 940 && isMobile.any()){// определяем, что клик с тач-скрина
		if(targetEl.classList.contains('menu-header__arrow')){// убежаемся, что кликнкнули по стрелке рядом со ссылкой
			targetEl.closest('[data-single-dropdown]').classList.toggle('touch-hover');// родительскому пункту меню вешаем класс, который делает подменю открытым
			var sibls = siblings(targetEl.closest('[data-single-dropdown]'));
			for(var i=0; i < sibls.length; i++){
				removeClass(sibls[i], 'touch-hover');// вызов ф-ции. для удаления такого класса у соседних пунктов меню
			}			
		}
		if(!targetEl.closest('.menu-header__item') && document.querySelector('.menu-header__item.touch-hover') !== null){//провереряем клик вне выпадающего меню
			removeClass('.menu-header__item', 'touch-hover');//удаляем у всех пунктов меню активный класс
		}
	}

});
// КОНЕЦ Открытие и закрытие выпадающих меню на тач-устройствах