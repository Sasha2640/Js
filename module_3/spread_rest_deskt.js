// Spread - ... распилення, дозволяє распилити колекцію елементів в іншу
// колекцію, зробив копію не міняючи її

// Масивви розпилення ========================================

const tempreatures = [15, 34, 54, 12, 34, 54];
console.log("🚀 ~ tempreatures:", tempreatures);
// Math не працює з массивами ===============
const min = Math.min(tempreatures);
console.log("🚀 ~ min:", min); // NaN
const a = [...tempreatures];
console.log(tempreatures === a); // false - різні посилання
console.log("🚀 ~ a:", a);
// а з рядками працює за допомогою spread ===========
const minSpread = Math.min(...tempreatures);
console.log("🚀 ~ minSpread:", minSpread); // 12

// Видаляємо елемент і створюємо новий без нього
const tempreaturesDel = [...tempreatures, 22];
console.log("🚀 ~ tempreaturesDel:", tempreaturesDel);

// Обьеднання массивів ================
const array1 = ["Mango", "Poly", "qweqwe"];
const array2 = ["Alex", "Ajax", "123"];

const newArray = [...array1, ...array2];
console.log("🚀 ~ newArray:", newArray);
// Можна використовувати з методами масивів разом
const someArray = [...array1.slice(0, 2), ...array2.slice(1)];
console.log("🚀 ~ someArray:", someArray);

// Обьекти, розпилення =====================================

const b = { x: 1, y: 2 };
const c = { x: 0, z: 3 };

const d = { ...b, ...c };
console.log("🚀 ~ d:", d);

// створимо химеру :)
const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };

const chimera = { ...lion, ...eagle };
console.log("🚀 ~ chimera:", chimera);

// Rest - обьеднання аргументів до масиву ================================

function add(...args) {
  console.log(args);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);

// Деструктурізація - змінним всередині {скобок} надати значення обьекта
// Присвоювання коли ключ с такою самою назвою як змінна

const hotel = {
  name: "NameHotel",
  stars: 5,
  capacity: 100,
};
console.log(hotel.name, hotel.stars, hotel.capacity);

// синтаксис (запис)
// const { name, stars, capacity, status } = hotel;
// console.log(name, stars, capacity, status);

// додати значення до status
const { name, stars, capacity, status = "nice" } = hotel;
console.log((name, stars, capacity, status));

// переприсвоїти ключ з новим значенням
// const {name: hotelName, stars, }

//TODO: № 1 ==============================================================
// У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// -сумувати; всі; зарплати
// - додати; умови, що; якщо; salaries; пустий; тоді; його; значення; дорівнює; 0;
// -вивести; результат; в; консоль;

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

// let keys = Object.values(salaries);

// function sumSalary(keys) {
//   let sum = 0;

//   for (const salary of keys) {
//     sum += salary;
//   }
//   console.log(sum);
// }
// sumSalary(keys);
// - short version
// let sum = 0;
// for (const value of Object.values(salaries)) {
//   sum += value;
// }
// console.log(sum);

//TODO: № 2 ===============================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// console.log(getBool(obj, "car"));

// function getBool(obj, key) {
//   for (const keys in obj) {
//     if (key === keys) {
//       return true;
//     }
//   }
//   return false;
// }
//- short variant
// function getBool(obj, key) {
//   return key in obj;
// return Object.keys(obj).includes(key);
// }

//TODO: № 3 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
// let valuess = Object.values(menu);
// console.log("🚀 ~ valuess:", valuess);

// function multiplyNumeric(valuess) {
//   for (const value of valuess) {
//     let numbers = 0;
//     let perevirka = typeof value;
//     console.log("🚀 ~ multiplyNumeric ~ perevirka:", perevirka);

//     if (perevirka === "number") {
//       numbers = value * 2;
//     }
//     return numbers;
//   }
// }
// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "number") {
//         obj[key] *= 2;
//       }
//     }
//   }
//   return obj;
// }
// console.log(multiplyNumeric(menu));
// const animals = ["cat", "dog"];
// animals.length = 0;
// console.log(animals[0]);
// console.log([1, 2, 3] === [1, 2, 3]);
// let a = 10;
// const b = a;
// a = 21;
// console.log(a === b);
