const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-input');
const todoImportance = document.querySelector('.todo-importance');
const newBtn3 = document.createElement('button');

// let newBtn3Text = "";


const createTodo = function(){
   const newLi = document.createElement('li');
   const newSpan = document.createElement('span');
   const newPtag = document.createElement('p');
   const newBtn = document.createElement('button');
   const newBtn2 = document.createElement('button');
   

   newBtn.addEventListener('click', () => {
      newLi.classList.toggle('complete');
      newLi.appendChild(newPtag);
      newPtag.classList.toggle('check-complete');
 
   });

   newBtn2.addEventListener('click', ()=>{
      newLi.remove();
   })
 
   newSpan.textContent = todoInput.value;
   newLi.appendChild(newBtn);
   newLi.appendChild(newBtn2);
   newLi.appendChild(newSpan);
   
   const clonedBtn3 = newBtn3.cloneNode(true); 
   clonedBtn3.textContent = todoImportance.value; 
   newLi.appendChild(clonedBtn3);
   
   todoList.appendChild(newLi);
   todoInput.value = "";

   // if(todoImportance = ""){
   //    newBtn3.textContent = "";
   // }
   
}



const keycodeCheck = function(){ 

   if(window.event.keyCode === 13 && todoInput.value !== ""){
      createTodo();
      
      todoImportance.value = '';
   }
}









