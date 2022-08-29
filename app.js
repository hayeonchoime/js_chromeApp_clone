const loginForm   = document.querySelector("#login-form"); 
const loginInput  = document.querySelector("#login-form input");

function onLoginSubmit(e){
      e.preventDefault(); // 어떤 이벤트의 기본 동작 등을 방지하는 것.
      console.log(e);

      //const username = loginInput.value;
      //console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);