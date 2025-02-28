//! Події - це сигнал від браузера, що щось трипалось/сталося.
//? click - трапляється, коли клікнули на елемент
//? submit - користувач відправив форму
//? focus - коли користувач фокусується на елементі, натцнув на input
//? keydown - користувач натискает на клавiatyry

//! Обробник події
//? elem.addEventListener() and elem.removeEventListener()

//? element.addEventListener("event", handler, [phase])
//? event - імя події і це завжди рядок
//? handler - посилання на функцію яка спрацює при події

const btnAction = document.querySelector("button");
const handleClick = () => alert("Why do not have a milk?");
function changeText() {
  const div = document.querySelector(".div");
  const p = document.createElement("p");
  p.innerText = "Add text :) ";
  div.appendChild(p);
}
// btnAction.addEventListener("click", handleClick);
btnAction.addEventListener("click", changeText);
//! Обьект події

//? event.type - тип події
//? event.target - елемент, на якому сталося подія
//? event.currentTarget - елемент, на скому спрацював обробник

function clickMe(event) {
  //   console.log("event :", event);
  console.log("event :", event.type);
  console.log("event :", event.target);
}
//btnAction.addEventListener("click", clickMe);

//! Дії по замовчуванню в браузері

//? Tag 'a' href - перехід на іншу стрінку, якесь джерело
//? Tag 'form' submit - перезавантажує сторінку

//? event.preventDefault() - прибирається дія по замовчуванню

const form = document.querySelector("form");
const loginForm = document.querySelector('input[type="text"]');
const passForm = document.querySelector('input[type="password"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const login = loginForm.value.trim();
  const pass = passForm.value.trim();

  if (login === "" || pass === "") {
    return alert("Введіть щось нормальне");
  }

  console.log("🚀 ~ loginForm:", loginForm.value);
  console.log("🚀 ~ passForm:", passForm.value);

  form.reset();

  alert(`Дякуємо, ${login} входіть не підслізніться`);
}

//! Відслідковування клавіатури
//? KeyboardEvent.key and KeyboardEvent.code

// window.addEventListener("keydown", (event) => console.log(event.key));

//? Відстлідковування миші
// window.addEventListener("mousemove", (event) =>
//   console.log(event.offsetX, event.offsetY)
// );
