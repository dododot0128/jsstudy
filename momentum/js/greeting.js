

// const h1 = document.querySelector("div.hello:first-child h1") // querySelector css 방식으로 찾음 
// // const titleA = document.querySelectorAll(".hello h1")

// function handleTitleClick () {
//     // const currentColor =  h1.style.color;
//     // let newColor;
//     // // console.log(h1.style.color);
//     // // h1.style.color = "blue";
//     // //console.log(h1.style.color);
//     // if ( currentColor === "blue" ) {
//     //    newColor = "tomato";
//     // } else {
//     //    newColor = "blue"
//     // }
//     // h1.style.color = newColor;
//     // h1.className = "active";
//     //const clickClass = "active"
//     // if (h1.classList.contains(clickClass)) {
//     //      h1.classList.remove(clickClass);
//     //     } else {
//     //     h1.classList.add(clickClass)
//     // }
//     h1.classList.toggle("active");
// }

// h1.addEventListener("click", handleTitleClick);
// const calculator = {
//     add : function (a,b) {
//         console.log (a + b);
//     },
//     minus: function (a,b){
//         console.log (a - b);
//     },
//     div: function (a,b) {
//         console.log (a / b);
//     },
//     multi: function (a,b){
//         console.log (a * b);
//     },
//     power: function (a,b){
//         console.log (a ** b);
//     }

// }
// calculator.minus (2 , 2);
// calculator.div (2 , 2);
// calculator.multi (2 , 2);
// calculator.power (2 , 2);

// const age = 32;
// function calculateKrAge (ageOfForeigner) {
//     return ageOfForeigner + 2; 
// }

// const KrAge = calculateKrAge(age);
// console.log(KrAge)

//parseInt() type을 number로 변환시켜줌 
// const age = parseInt(prompt("how old are you?"));
    
//     console.log(isNaN(age));
    // or 
    // true || true === true
    // false || true === true
    // true || false === true
    // false || false === false
    
    // and 
    // true && true === true
    // true && false === false
    // false && true === false
    // true && false === false

    // if ( isNaN(age) || age < 0) { //  || 하나만 맞아도  true
    //     alert("양수만 입력하세요");
    // } else if ( age < 18) {
    //     alert("미성년자는 음주를 삼가주세요");
    // } else if ( age >= 18 && age <= 50) { // && 둘 다 맞아야 true 
    //     alert("성인입니다");
    // } else {
    //     alert("건강을 위해 음주를 삼가주세요 ");
    // }






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
    greeting.innerHTML = `hello ${username}`;
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
 

