// TODO: ЗАДАЧА 1 на інтервали  ====================================

// Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду,  починаючи з
// from i закінчуючи to

// const from = prompt("Write from number");
// const to = prompt("Write to number");

const from = 1;
const to = 5;

function printNumbers(from, to) {
  const bibliotekOfNumbers = setInterval(() => {
    console.log(from);
    from += 1;
    if (from > to) {
      clearInterval(bibliotekOfNumbers);
    }
  }, 1000);
}

// printNumbers(from, to); <- розкоментувати щоб працювало

// TODO: ЗАДАЧА 2 на interval  ====================================
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду
//  змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const body = document.querySelector("body");

btnStop.disabled = true;
let nazvaId = null;

function randomBackground() {
  const randColor = getRandomHexColor();
  body.style.backgroundColor = randColor;
}

btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  nazvaId = setInterval(randomBackground, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(nazvaId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
