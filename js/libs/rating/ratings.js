(function() {
  var crystal = function(){
    var ratings = document.querySelectorAll('.crystal-rating');
   
    cyclingRatings = function(){
      for(var i=0; i<ratings.length; i++){
        getValues(ratings[i]);
        if(ratings[i].hasAttribute('data-handler')){
          console.log('ratings.js')
          bindEvents(ratings[i]);  
        }
      }
    }
    
    getValues = function(rating){
        console.log(rating.querySelector('.crystal-rating__value').innerText)
      var ratingStr = rating.querySelector('.crystal-rating__value').innerText,  
          value = '';
      
      if(ratingStr.indexOf(',') != -1){
        value = +ratingStr.replace(/,/gi, '.');

      }else{
        value = ratingStr;
      }
      setGraphicValue(rating, +value)    
    }
    
    setGraphicValue = function(rating, value){
      var activeValue = rating.querySelector('.crystal-rating__active');
      activeValue.style.width = value / 0.05 - 1.5+ '%' 
    }
    setNumericValue = function(rating, value){
      rating.querySelector('.crystal-rating__value').innerText = value
    }
    
    bindEvents = function(rating){
      
      var inps = rating.querySelectorAll('input');
      for(var i=0; i<inps.length; i++){
        inps[i].addEventListener('mouseenter', hover)
        inps[i].addEventListener('mouseleave', leave)
        inps[i].addEventListener('click', click)
      }
    }
    
    hover = function(e){
      setGraphicValue(e.target.closest('.crystal-rating'), +e.target.value)
    }
    leave = function(e) {
      getValues(e.target.closest('.crystal-rating'))
    }
    click = function(e){
       setGraphicValue(e.target.closest('.crystal-rating'), +e.target.value)
      setNumericValue(e.target.closest('.crystal-rating'), +e.target.value)
      e.target.closest('.crystal-rating').setAttribute('data-rating', +e.target.value)
    }
    
    return {
      init: function(){
        cyclingRatings()
      }
    }
  }

  if(document.querySelectorAll('.crystal-rating') != null){
    crystal().init()
  }
})();