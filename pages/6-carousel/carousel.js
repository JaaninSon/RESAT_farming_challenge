(function($){

   let cnt = 0;

   const slide = $('.slide-wrap');

   function imgSlide(){
      slide.stop().animate({left:-100*cnt + '%'}, 1000, function(){
         if(cnt===4) cnt=0;
         if(cnt<0) cnt=3;

         slide.stop().animate({left:-100*cnt + '%'},0)
      });
   }

   function nexCount(){
      cnt++;
      imgSlide();
   }

   function prevCount(){
      cnt--;
      imgSlide();
   }

   $('.prev-btn').on({
      click: function(e){
         e.preventDefault();
         prevCount()
         console.log('prev');
      }
   })

   $('.next-btn').on({
      click: function(e){
         e.preventDefault();
         nexCount();
         console.log('next');
      }
   })


})(jQuery);