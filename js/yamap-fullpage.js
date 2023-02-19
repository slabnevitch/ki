ymaps.ready(fullMapInit);
function fullMapInit(){     
	var myMap = new ymaps.Map("map", {
		center: [45.047920, 38.974579],
		zoom: 15,
       	controls: ['zoomControl'], //оставляем только масштабирование
           	// behaviors: ['drag'] //оставляем только поведение drag
          });
}