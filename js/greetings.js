const loginForm   = document.querySelector("#login-form"); 
const loginInput  = document.querySelector("#login-form input");
const greeting    = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// login 함수
function onLoginSubmit(e){
      e.preventDefault();
      
      // 클래스제어
      loginForm.classList.add(HIDDEN_CLASSNAME);
      
      const username =loginInput.value;
      localStorage.setItem(USERNAME_KEY,username);

      paintGreetings(username);
}

// 화면 로드 시 제어
function paintGreetings(username){
      greeting.innerText = `Hello! ${username}`;
      greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
      // show the form
      loginForm.classList.remove(HIDDEN_CLASSNAME);

      loginForm.addEventListener("submit",onLoginSubmit);
} else {
      // show the greetings
      paintGreetings(savedUsername);
}