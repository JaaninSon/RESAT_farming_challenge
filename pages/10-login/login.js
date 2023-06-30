const userId = "jaan";
const userPw = "1234";

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('.login-btn');
const checkMessage = document.querySelector('.check-message');
const loginInput = document.querySelector('.longin-input');

function checkUserInfo (){
   if(username.value === userId && password.value === userPw){
      checkMessage.innerText = '접속되었습니다!';
   }else {
      checkMessage.innerText = '아이디 또는 비밀번호가 틀렸습니다.';
   }

function refreshIdInfo (){
   checkMessage.innerText = "";
}
function refreshPwInfo (){
   checkMessage.innerText = "";
}

username.addEventListener('change', refreshIdInfo);
password.addEventListener('change', refreshPwInfo);

};