// function() - це інструмент для структуровання
// великих програм, зменьшення повторень та
// ізолювання коду

// Синтаксис
// Funtion declaration - звичайне оголощення
// змінної, значення якої буде функція

// const add = function (params, a,b) {
//     return params a + b
// }
// const add = function (a, b) {
//   return a + b;
// };
// const result = add(1, 2);
// console.log(result);

// const fnA = function () {
//   console.log("Start");
//   fnB();
//   console.log("Continue after fnB(");
// };
// const fnB = function () {
//   console.log("Start fnB");
// };
// console.log("main Start");
// fnA();
// console.log("main END");

// Псевдомассив arguments - працює під капотом, коли не знаемо скільки
// аршументів буде
// методи: length,from(), (...args)
// const sum = function (...args) {
//   let total = 0;
//   //   const args = arguments;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));

// Function declaration - оголошення функції інше, найчастіше викори-
// стовується

function end(a, b) {
  return a - b;
}
//  Global scope

function foo() {
  // Local function scope of foo

  if (true) {
    // Local block scope
  }

  // Local function scope of foo

  function bar() {
    // Local function scope of bar
  }

  // Local function scope of foo
}

// Global scope

// Arrow function - стрілочні функції
const add = function (a, b) {
  return a + b;
};

const addD = (a, b) => a + b;
const qwe = (x) => x * 2;

//TODO: № 1 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
//
// + Перебрати масив аргументів
// + Сумувати всі числа
// + Поділити суму на кількість всіх чисел"length"
// + Зробити зміну для зберігання суми
// - Зробити перевірку на число
// const calculateAverage = function (...args) {
//   let sum = 0;
//   let counter = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     sum += arg;
//     counter += 1;
//   }
//   let final = sum / counter;
//   return final;
// };
// console.log(calculateAverage(1, 1, 2, "a", 20));

//TODO: № 2 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArryi = [22, 11, 34, 5, 12, 13, 14, 15];

// // - Сумувати сусідні числа
// // - Запушити їх в масив
// function someArr(array) {
//   const newArray = [];
//   console.log(array.length);
//   for (let i = 0; i < array.length - 1; i += 1) {
//     newArray.push(array[i] + array[i + 1]);
//   }
//   return newArray;
// }
// console.log(someArr(someArryi));

//TODO: додаткове з зірочкою) ==========================

// Зробіть функцію яка буде перевіряти слово
// чи воно є поліндромом (слово, яке читається зліва на право і наоборот)
// function isPalindrome(string) {
//   console.log(string === string.split("").reverse().join(""));
// }
// isPalindrome("тест"); // false
// isPalindrome("шалаш"); // true
