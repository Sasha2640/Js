//! Async JS

//? Sync JS - синхронний JS це тоді, коли код виконується послідовно
//? кожна наступна операція чекає, поки не виконається попередніа

//? Async JS - асинхронний JS це тоді, коли код виконується одночасно
//? і не чекає коли виконаються попередні

//? Sync JS
// console.log("wan");
// console.log("tu");
// console.log("sri");

//? Async JS
// console.log("fo");

// setTimeout(() => {
//   console.log("faiw");
// }, 3000);

// console.log("sikx");

//? setTimeout | setInterval

//? const timerId = setTimeout(callback, delay, arg1, arg2, ...)
//? setTimeout - приймає як мінімум 2 аргументи, callback і delay
//? в мілісекундахб після закінчиння якого буде виконана функція
//? clearTimeout(id) - id це id інтервала по якому почали інтервал

// console.log("fo");

// setTimeout(() => {
//   console.log("faiw");
// }, 3000);

// console.log("sikx");

//? setInterval - виконується дія(код) з встановленним проміжком
//? const timerId = setInterval(callback, delay, arg1, arg2, ...)
//? clearInterval(id) - id це id інтервала по якому почали інтервал

const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
let timerId = null;

btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`Interval JS ${Date.now()}`);
  }, 1000);
});
btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  console.log("Interval Stop");
});

//? class Date() - все що використовується с датами

const date = new Date();
console.log("🚀 ~ date:", date);
//? Date.pasre() - метод яий обробляє рядки
const date1 = new Date("March 4, 2017");
console.log("🚀 ~ date1:", date1);
//? args Date - new Date(year, month, date, hours, minutes, seconds , ms)
const date3 = new Date(2000, 5, 8, 12, 0, 0, 0);
console.log("🚀 ~ date3:", date3);
console.log(`Гєтєри Дати ${date.getTime()}`);
