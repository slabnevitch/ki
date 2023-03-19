if (document.getElementById('map') !== null){
  ymaps.ready(fullMapInit);
}
if (document.getElementById('map-shops') !== null){
  ymaps.ready(shopsMapInit);
}
function fullMapInit(){     
	var myMap = new ymaps.Map("map", {
		center: [45.047920, 38.974579],
		zoom: 15,
       	controls: ['zoomControl'], //оставляем только масштабирование
           	// behaviors: ['drag'] //оставляем только поведение drag
  		// autoFitToViewport: 'always'
  }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        autoFitToViewport: 'always'
    });
}

function shopsMapInit(){     
  var myMap = new ymaps.Map("map-shops", {
    center: [45.047920, 38.974579],
    zoom: 15,
        controls: ['zoomControl'], //оставляем только масштабирование
            // behaviors: ['drag'] //оставляем только поведение drag
      // autoFitToViewport: 'always'
  }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        autoFitToViewport: 'always'
    });
}