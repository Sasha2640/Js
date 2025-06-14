// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];
// const galleryList = document.querySelector(".gallery");
// let items = "";
// for (let i = 0; i < images.length; i++) {
//   items += `<li><img src="${images[i].url}"  style="width: 300px</li>; `;
// }

// galleryList.innerHTML = items;
// //Todo Task 3 --------------------------------------------------------------------------------
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ingredientsList = document.querySelector("#ingredients");

// const ingridientsMasib = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   return li;
// });
// console.log("🚀 ~ items ~ items:", ingridientsMasib);
// ingredientsList.append(...ingridientsMasib);

// // TODO task 4 ------------------------------------------------------------
// let counterValue = 0;

// const valueElement = document.querySelector("#value");
// const decrementButton = document.querySelector("[data-action='decrement']");
// const incrementButton = document.querySelector("[data-action='increment']");

// decrementButton.onclick = function () {
//   counterValue -= 1;
//   valueElement.textContent = counterValue;
// };

// incrementButton.onclick = function () {
//   counterValue += 1;
//   valueElement.textContent = counterValue;
// };
// // TODO task 5 ------------------------------------------------------------
// // Напиши скрипт, який під час набору тексту в інпуті
// // input#name - input(подія input), підставляє його поточне значення в
// // span#name - output.Якщо інпут порожній, у спані повинен
// // відображатися рядок "Anonymous".

// const inputAnonymus = document.querySelector("#name-input");
// const returnedText = document.querySelector("#name-output");

// inputAnonymus.addEventListener("input", changeText);
// function changeText() {
//   if (inputAnonymus.value.trim() !== "") {
//     return (returnedText.textContent = inputAnonymus.value);
//   }
//   return (returnedText.textContent = "Anonymous");
// }
// // TODO task 6 ------------------------------------------------------------
// // Напиши скрипт, який під час втрати фокусу на
// // інпуті(подія blur), перевіряє його вміст щодо
// // правильної кількості введених символів.

// // Яка кількість символів повинна бути в інпуті,
// // зазначається в його атрибуті data - length.
// // Якщо введена правильна кількість символів,
// // то border інпуту стає зеленим,
// // якщо неправильна кількість - червоним.
// // Для додавання стилів використовуй
// // CSS - класи valid і invalid, які ми вже додали
// // у вихідні файли завдання.

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", () => {
//   const requiredLength = Number(input.dataset.length);
//   const inputLength = input.value.trim().length;

//   if (inputLength === requiredLength) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// });
// // TODO task 7 ------------------------------------------------------------
// // Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// //  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// //  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// const fontSizeControl = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// text.style.fontSize = `${fontSizeControl.value}px`;

// fontSizeControl.addEventListener("input", () => {
//   text.style.fontSize = `${fontSizeControl.value}px`;
// });
// // TODO task 8 ------------------------------------------------------------
// // Обробка відправлення форми form.login - form повинна відбуватися відповідно до події submit.
// // Під час відправлення форми сторінка не повинна перезавантажуватися.
// // Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// // Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// //  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// // Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset. */
// const loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", (event) => {
//   const { email, password } = loginForm.elements;

//   if (!email.value.trim() || !password.value.trim()) {
//     alert("Всі поля повинні бути заповнені!");
//     return;
//   }

//   const formData = {
//     email: email.value.trim(),
//     password: password.value.trim(),
//   };

//   console.log(formData);

//   loginForm.reset(); // Очищаємо форму
// });
// TODO task 9 ------------------------------------------------------------
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
console.log("hello");

// TODO task 10 ------------------------------------------------------------
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const inpx = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.borderRadius = "50%";
    box.style.margin = "5px";
    fragment.appendChild(box);
    size += 10;
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  inpx.value = "";
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(inpx.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});
destroyButton.addEventListener("click", destroyBoxes);
