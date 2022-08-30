const loginForm   = document.querySelector("#login-form"); 
const loginInput  = document.querySelector("#login-form input");
const greeting          = document.querySelector("#greeting");

function onLoginSubmit(e){
      e.preventDefault();

      const HIDDEN_CLASSNAME = "hidden";

      // 클래스제어
      loginForm.classList.add(HIDDEN_CLASSNAME);
      greeting.classList.remove(HIDDEN_CLASSNAME);
      
      const username =loginInput.value;
      greeting.innerHTML = `Hello! ${username}<br/>Hi~`;
}


loginForm.addEventListener("submit",onLoginSubmit);
