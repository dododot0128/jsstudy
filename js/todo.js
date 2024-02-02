const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = []; // 로컬스토리지에 넣기 근데 array는 저장 안됨. 텍스트만 가능하다. 


function saveToDos (){ 
    // 새로고침해도 다시 뿌려지게 로컬스토리지에 넣기 근데 array는 저장 안됨.
    // toDoDos 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteTodo(event) {
    const li = event.target.parentElement;
    // console.log("li.id"); // 지우기 전 id값을 알수있음
    li.remove();
    // toDos = toDos.filter((toDo) => toDo.id !== li.id); 
    // li.remove();를 지우고 지운, 클릭한 li.id와 다른 toDo는 남기고 싶다.
    // console.log(typeof li.id); // id 타입을 알수있음
    // li.id 는 number가 아닌 strng라 지워지지 않음 그래서 partInt로 숫자로 바꿈
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos(); 
    // 지우고 saveToDos를 다시 부름 
}

function paintToDo(newTodo) {
    // console.log("paint todo", newTodo)
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    // console.log(li);
}
function handleTodoSubmit(event){
    event.preventDefault(); // submit 기본 새로고침 막기 
    const newTodo = toDoInput.value; // input value비우기 전에 값 저장하기
    toDoInput.value=""; // 빈 값넗기
    const newTotoObj = {
        text:newTodo,
        id: Date.now(), 
    }
    toDos.push (newTotoObj);
    paintToDo (newTotoObj);
    saveToDos ();
}

toDoForm.addEventListener("submit", handleTodoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null ) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    //forEach는 paintToDo를 parsedToDos 배열의 요소마다 실행 
}

// const arr = ["pizza","banana","tomato","milk"]

// function listFilter(item){
//     return item !== "banana"
//     // listFilter의 함수는 반드시 true를 리턴해야 함
//     // false를 리턴하면 그 iten은 새 array에 포함되지 않음
// }
// arr.filter(listFilter);

// [1,2,3,4].filter(listFilter);
// 1. listFilter에 1,2,3,4를 넣어서 부름
// function listFilter(item){
//    return item !== 3 // 3이 아니면  true를 리턴
// }
// listFilter(1) = 1 true
// listFilter(2) = 2 true
// listFilter(3) x false 제외함
// listFilter(4) = 4 true

// const bigarr = [123,5123,5412,1,23,53,57678]
// function listFunction(over) { //over는 어떤 단어를 사용해도 괜찮음
//     return over <= 1000 // 1000보다 큰 수를 모두 제외 
// }
// bigarr.filter(listFunction);
// bigarr.filter(over => over <= 1000 ); // 위외 동일한 소스  

