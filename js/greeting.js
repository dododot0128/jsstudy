// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  // 대문자 : 반복되는 strign 변수로 고정 
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    // console.log("hello", loginInput.value);
    event.preventDefault(); //브라우저의 기본 동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerHTML = "hello " + username;
    // greeting.innerHTML = `hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem((USERNAME_KEY));
    greeting.innerHTML = `HELLO ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// loginButton.addEventListener("submit", onLoginSubmit); 에서  onLoginSubmit() <- 하면 브라우저는 즉시 실행.
// addEventListener를 활용하고 싶을 때에는  () 없이 해야 

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null){
    //vshow the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    // show  the greeting
    paintGreetings();
    
}


