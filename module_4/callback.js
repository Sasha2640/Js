// Callback
// Маємо функції вищого порядку (приймають в якості параметру інщі функції)
// Функції обратного виклику (callback) - функція яка передається інщій
// функції в якості аргумента, як в свою чергу викликає її (callback)

function callbackNow(message) {
  console.log(message);
}
function applyNow(callback) {
  const stringMessage = "Hello world";
  return callback(stringMessage);
}

applyNow(callbackNow);

// Абстрации - приховання деталей реалізації
// дозволяє думати о задачах на більш високом (абстрактном) рівні

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
// function nRaz(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// nRaz(10);
// callback 1
function printValue(value) {
  // console.log(value);
}
// callback 2
function logValue(value) {
  // console.log("Value is:", value);
}
// High function
function nRaz(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

nRaz(3, printValue); // callback 1

nRaz(5, logValue); // callback 2

const values = [];

nRaz(5, (value) => {
  values.push(`Label-${value + 1}`);
});

// console.log(values);

// Фільтрація массива

// function filter(array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// }

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "mango", quantity: 150, isFresh: false },
//   { name: "ananas", quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// console.log("🚀 ~ freshFruits:", freshFruits);

// const fruitsQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
// console.log("🚀 ~ fruitsQuantity:", fruitsQuantity);

// Стек викликів

function bar() {
  console.log("This is bar");
}
function baz() {
  console.log("Its baz");
}
function foo() {
  console.log("Hey foo");
  bar();
  baz();
}
// foo();

// Замикання (closure)  - звязок поміж функцієй  и її цепочкою областей видімості
// приклад повара)

function makeShef(name) {
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
}

// const mango = makeShef("Mango");
// mango("apple pie");
// mango("mango pie");

// const poly = makeShef("Poly");
// console.dir(poly);
// poly("eggs and bacon");
// poly("pancakes");
