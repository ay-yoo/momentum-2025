const todo = document.querySelector(".todo");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoListYet = document.querySelector(".todo-list--yet");
const todoListDone = document.querySelector(".todo-list--done");

let todoArr = [];
let todoArrDone = [];
const savedTodo = localStorage.getItem("todos");
const savedTodoDone = localStorage.getItem("todosDone");

function handleTodo(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  //obj 꼴로 만들어 스토리지에 저장
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoArr.push(newTodoObj);
  console.log(todoArr);
  localStorage.setItem("todos", JSON.stringify(todoArr));

  paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handleTodo);

function paintTodo(newTodoObj, isDone = false) {
  //요소 createElement 로 만들어서 html에 추가.(done 여부에 따라 요소 만들어지는 위치 상이)
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  const icon = document.createElement("i");
  span.innerText = newTodoObj.text;
  icon.classList.add("fa-solid", "fa-check", "fa-lg");
  btn.appendChild(icon);
  li.appendChild(span);
  li.appendChild(btn);
  btn.addEventListener("click", deleteTodo);

  if (isDone) {
    todoListDone.appendChild(li);
  } else {
    todoListYet.appendChild(li);
  }
  noTaskMessage();
}

function deleteTodo(event) {
  //delete 버튼이 클릭되었을 때, Li를 선택하고, 해당 li 를 지운 새로운 배열을 만들어 저장해줌
  const deleteLi = event.target.closest("li");
  const deleteLiText = deleteLi.querySelector("span").innerText;

  todoArr = todoArr.filter((li) => li.id !== parseInt(deleteLi.id));
  localStorage.setItem("todos", JSON.stringify(todoArr));
  deleteLi.remove();

  //지워진 Li 를 새로운 객체에 저장하고, done 리스트에 추가해줌
  const newTodoObjDone = {
    id: Date.now(),
    text: deleteLiText,
  };

  todoArrDone.push(newTodoObjDone);
  localStorage.setItem("todosDone", JSON.stringify(todoArrDone));
  todoListDone.appendChild(deleteLi);
  noTaskMessage();
}

if (savedTodo) {
  const parsedToDos = JSON.parse(savedTodo);
  parsedToDos.forEach((todo) => paintTodo(todo, false));
  todoArr = parsedToDos;
}

if (savedTodoDone) {
  const parsedToDosDone = JSON.parse(savedTodoDone);
  parsedToDosDone.forEach((todo) => paintTodo(todo, true));
  todoArrDone = parsedToDosDone;
}
noTaskMessage();
function noTaskMessage() {
  const noTask = todoListYet.querySelector(".no-task");
  if (todoArr.length < 1) {
    noTask.classList.remove("hidden");
  } else {
    noTask.classList.add("hidden");
  }
}
