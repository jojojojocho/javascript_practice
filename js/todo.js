const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector("ul#todo-list");

function makeToDo(toDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    span.innerText=toDo;
    toDoList.appendChild(li);
}


function toDoFormSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    makeToDo(newTodo);
}

toDoForm.addEventListener("submit",toDoFormSubmit)

