
const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.nav-container');

   function handleClick(){
      nav.style.display = "flex";
      btn.style.display = 'none';
      closeBtn.style.display = "block";
   }

   function handleCloseBtn(){
      nav.style.display = "none";
      closeBtn.style.display = "none";
      btn.style.display = "block";
   }

btn.addEventListener('click', handleClick);
closeBtn.addEventListener('click', handleCloseBtn);

window.addEventListener('resize', ()=>{

   if(window.innerWidth > 800) {
      btn.style.display = "none";
      if(nav.style.display="none"){
         nav.style.display="flex";
      }
   } else {
      btn.style.display = "block";
      if(btn.style.display = "block" && nav.style.display=="flex"){
         nav.style.display="none";
         closeBtn.display="none";
      }
   }
})

