/*
каждая ссылка навигации и соответствующая ей секция должны иметь атрибут data-anchor с одинаковым значением
*/
function ScrollToSects(opts){
  var _self = this,
      opts = {
        linksContainer: opts.linksContainer || 'header',
        offset: opts.offset || 0,
        sectsSelector: opts.sectsSelector || 'section',
        delay: opts.delay || null
      },
      links = Array.prototype.slice.call(document.querySelector(opts.linksContainer)
              .querySelectorAll('[data-anchor]')),
      sects = Array.prototype.slice.call(document.querySelectorAll(opts.sectsSelector + '[data-anchor]')),
      pageHeader = document.querySelector('header'),
      gotoBlockValue = 0;
   
  this.init = function(){
    this.events();
  },
  this.events = function(){
    links.forEach(function(link){
       var nav = link;
      if(link.dataset.anchor){
       link.addEventListener('click', _self.navClick);
      }else{
        console.log('nav links must have"data-anchor attribute"');
      }
    });
  },
  this.navClick = function(e){
    e.preventDefault();
        sects.forEach(function(sect){
        if(sect.dataset.anchor && sect.dataset.anchor === e.target.dataset.anchor){
          gotoBlockValue = sect.getBoundingClientRect().top + pageYOffset - pageHeader.offsetHeight + opts.offset;
         
        }
      });
      e.target.classList.add('active');
      siblings(e.target.parentElement).forEach(function(item) {
        item.querySelector('.payment__menu-link').classList.remove('active');

      });
    
     if(opts.delay){
       // console.log(opts.delay)
       // console.log(gotoBlockValue)
       setTimeout(function(){
         _self.scrollToTarget(gotoBlockValue);
          // return;
       }, opts.delay);
      
     }else{
       _self.scrollToTarget(gotoBlockValue);
     }
    
  },
   this.scrollToTarget = function(scrollValue){
    // console.log(scrollValue)
    window.scrollTo({
      top: scrollValue,
      behavior: "smooth"
    }); 
  }
  this.init();
}