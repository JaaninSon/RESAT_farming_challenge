(function($){

   let cnt = 0;
   let setId = 0;

   const slide = $('.launching-banner');

   function imgSlide(){
      slide.stop().animate({left:-100*cnt + '%'}, 1000, function(){
         if(cnt>3) cnt=0;
         if(cnt<0) cnt=3;

         pageBtnFn(cnt);
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

   function pageBtnFn(z){
      $('.page-btn').removeClass('on');
      $('.page-btn').eq(z).addClass('on');
   }

   $('.prev-btn').on({
      mouseenter: function(){
         clearInterval(setId);
      },
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
      mouseenter: function(){
         clearInterval(setId);
      },
      click: function(e){
         e.preventDefault();
         nexCount();
         clearInterval(setId);
      },
      mouseleave: function(){
         autoTimer();
      }
   })


})(jQuery);