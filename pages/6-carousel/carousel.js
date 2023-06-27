(function($){

   let cnt = 0;
   let setId = 0;

   const slide = $('.slide-wrap');

   function imgSlide(){
      slide.stop().animate({left:-100*cnt + '%'}, 1000, function(){
         if(cnt>3) cnt=0;
         if(cnt<0) cnt=3;
         console.log(cnt);
         slide.stop().animate({left:-100*cnt + '%'}, 0)
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
      mouseenter: function(){
         clearInterval(setId);
      },
      click: function(){
         prevCount()
         clearInterval(setId);
      },
      mouseleave: function(){
         autoTimer();      
      }
   })

   $('.next-btn').on({
      mouseenter: function(){
         clearInterval(setId);
      },
      click: function(){
         nexCount();
         clearInterval(setId);
      },
      mouseleave: function(){
         autoTimer();
      }
   })


})(jQuery);