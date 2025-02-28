//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля
// введення(дивіться на елементи в html - розмітці)

const input = document.querySelector("#alertInput");
const btnShowME = document.querySelector("#alertButton");
btnShowME.addEventListener("click", returnInput);
function returnInput() {
  console.log(input.value);
}

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const btnSwapMe = document.querySelector("#swapButton");
const inputLeft = document.querySelector("#leftSwapInput");
const inputRight = document.querySelector("#rightSwapInput");

btnSwapMe.addEventListener("click", swap);
function swap() {
  const textContent = inputLeft.value;
  inputLeft.value = inputRight.value;
  inputRight.value = textContent;
}
//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх
// порядковий номер

const masibP = document.querySelectorAll("p");
const btnChange = document.querySelector("#btnChange");
// console.log("🚀 ~ masibP:", masibP);

btnChange.addEventListener("click", changeTextPosition);

function changeTextPosition() {
  masibP.forEach((p, index) => {
    p.textContent = index + 1;
  });
}
//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

const poleZuTekstom = document.querySelector("#passwordInput");
const knopkaShovaniaAboVidkrivania = document.querySelector("#passwordButton");

knopkaShovaniaAboVidkrivania.addEventListener("click", pominaty);
function pominaty() {
  const typeInput = poleZuTekstom.getAttribute("type");
  console.log("🚀 ~ pominaty ~ typeInput:", typeInput);
  const toggleTypeInput = typeInput === "password" ? "text" : "password";
  poleZuTekstom.setAttribute("type", toggleTypeInput);
  console.log("🚀 ~ pominaty ~ toggleTypeInput:", toggleTypeInput);

  const btnUkaMinaitisa = knopkaShovaniaAboVidkrivania.textContent;
  console.log("🚀 ~ pominaty ~ btnUkaMinaitisa:", btnUkaMinaitisa);
  const textNaZaminu =
    btnUkaMinaitisa === "Приховати" ? "Розкрити" : "Приховати";
  knopkaShovaniaAboVidkrivania.textContent = textNaZaminu;
}
//TODO: № 5 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,
//  кнопка "Збільшити" - більше на 10 пікселів.

const btnSmaller = document.querySelector("#decrease");
const btnBigger = document.querySelector("#increase");
const kvadratik = document.querySelector("#box");

// btnSmaller.addEventListener("click", makeKvadratikSmaller);
// btnBigger.addEventListener("click", makeKvadratikBigger);

// function makeKvadratikSmaller() {
//   const kvadratukWeight = kvadratik.offsetWidth;
//   const kvadratukHeight = kvadratik.offsetHeight;

//   kvadratik.style.width = `${kvadratukWeight - 10}px`;
//   kvadratik.style.height = `${kvadratukHeight - 10}px`;
// }

// function makeKvadratikBigger() {
//   const kvadratukWeight = kvadratik.offsetWidth;
//   const kvadratukHeight = kvadratik.offsetHeight;

//   kvadratik.style.width = `${kvadratukWeight + 10}px`;
//   kvadratik.style.height = `${kvadratukHeight + 10}px`;
// }

btnSmaller.addEventListener("click", changeKwadratikSize);
btnBigger.addEventListener("click", changeKwadratikSize);

function changeKwadratikSize(event) {
  const kvadratukWeight = kvadratik.offsetWidth;
  const kvadratukHeight = kvadratik.offsetHeight;

  const currentBtn = event.target.getAttribute("id"); // event.target - буде показувати на яку кнопку тицнули
  console.log("🚀 ~ changeKwadratikSize ~ currentBtn:", currentBtn);

  switch (currentBtn) {
    case "decrease":
      kvadratik.style.width = `${kvadratukWeight - 10}px`;
      kvadratik.style.height = `${kvadratukHeight - 10}px`;
      break;

    case "increase":
      kvadratik.style.width = `${kvadratukWeight + 10}px`;
      kvadratik.style.height = `${kvadratukHeight + 10}px`;
      break;
  }
}
//TODO: № 6 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

const place = document.querySelector("#place");

window.addEventListener("click", (event) => {
  const isEl = place.contains(event.target);
  // console.log("🚀 ~ window.addEventListener ~ isEl:", isEl);

  if (isEl) {
    console.log("You cliked in the green place");
    return;
  }
  console.log("You mistake cliked place");
});
//TODO: № 7 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

const btnYakaPodvoyyieChislo = document.querySelector("#double");
const masibDouble = document.querySelector(".list").children; // pseudoArray
console.log("🚀 ~ masibDouble:", masibDouble);

btnYakaPodvoyyieChislo.addEventListener("click", double);
function double() {
  [...masibDouble].map((item) => (item.textContent *= 2));
}
//TODO: № 8 ==============================================
// Вводимо число у input з id="test" - число
// При кліку на кнопку, у інпут з id="result" повинен буди квадрат цього числа
// Зробити перевірку на число, реалізувати за допомогою alert з текстом

const textChoPriimaetisa = document.querySelector("#test");
const btnCreateMagic = document.querySelector("#btn");
const inputResult = document.querySelector("#result");

btnCreateMagic.addEventListener("click", pogvoitu);

function pogvoitu() {
  if (isNaN(textChoPriimaetisa.value)) {
    alert("ITS NOT A NUMBER!!!!!!!!!!!!!!!!!!!!!!");
  } else {
    inputResult.value = textChoPriimaetisa.value ** 2;
  }
}

//TODO: № 9 ==============================================
// Напишіть інтерфейс, щоб створити список
// Для кожного пункту:
// Запитуйте вміст у користувача за допомогою promt
// створювати пункт та додавати його до списку
// процес припиняється коли користувач натискає ESC
// усі елементи мають створюватись динамічно

const heading = document.querySelector("h1");
const list = document.createElement("ul");

heading.after(list);

let text = prompt("Enter youe task today:");

const itemsTasks = [];

while (text) {
  const task = `<li>${text}</li>`;
  itemsTasks.push(task);
  text = prompt("Enter your task today");
}

list.insertAdjacentHTML("beforeend", itemsTasks.join(""));
