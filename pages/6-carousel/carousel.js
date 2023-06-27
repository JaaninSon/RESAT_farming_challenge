(function($){

   let cnt = 0;
   let setId = 0;

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

   function autoTimer(){
      setId = setInterval(nexCount, 2000);
   }
   autoTimer();

   $('.prev-btn').on({
      click: function(e){
         e.preventDefault();
         prevCount()
         clearInterval(setId);
      },
      mouseleave: function(){
         autoTimer();      
      }
   })

   $('.next-btn').on({
      click: function(e){
         e.preventDefault();
         nexCount();
         console.log('next');
         clearInterval(setId);
      },
      mouseleave(){
         autoTimer();
      }
   })


})(jQuery);