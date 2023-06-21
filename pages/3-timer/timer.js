const messageContainer = document.querySelector('.timer-message');
const timerContainer = document.querySelector('.timer-container');

const inputHour = document.getElementById('input-hour').value;
const inputMin = document.getElementById('input-min').value;
const inputSec = document.getElementById('input-sec').value;

const timerFormat = `${inputHour}:${inputMin}:${inputSec}`;

let timer;

messageContainer.innerHTML = '<h3>타이머를 입력해 주세요.</h3>';

const counterMaker = function(){

   const remainingHours = String(Math.floor(inputSec / 3600)).padStart(2, "0");
   const remainingMin =  String(Math.floor(inputSec / 60)).padStart(2, "0");
   const remainingSec =  String(Math.floor(inputSec % 60)).padStart(2, "0")

   let time = remainingHours;
   time += remainingMin;
   time += remainingSec;

   if(time >=0){
      timer = setInterval(()=>{
         time--;
      }, 1000);

      function counterStop (){
         clearInterval(timer);
      };
   
      function counterReset () {
         clearInterval(timer);
         inputHour = "00";
         inputMin = "00";
         inputSec = "00";
      }

   }
  
}

document.getElementById('start').addEventListener('click', counterMaker);
document.getElementById('stop').addEventListener('click', counterStop);
document.getElementById('reset').addEventListener('click', counterReset);
