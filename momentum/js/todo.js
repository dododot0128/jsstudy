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
    console.log("li.id");
    li.remove();
}

function paintToDo(newTodo) {
    console.log("paint todo", newTodo)
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
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
}