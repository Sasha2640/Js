// TODO: ЗАДАЧА на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const input = document.querySelector("input[name='taskName']");
const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");

const TASKS_KEY = "tasks";

let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

  const task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";
    renderTasks();
    saveTasks();
  }
}

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;
    const btn = document.createElement("button");
    btn.innerText = "Delete Task";
    btn.dataset.index = index;
    btn.addEventListener("click", deleteTask);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function deleteTask(event) {
  const taskIndex = event.target.dataset.index;
  tasks.splice(taskIndex, 1);
  renderTasks();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

renderTasks();

console.log("🚀 ~ tasks:", tasks);
