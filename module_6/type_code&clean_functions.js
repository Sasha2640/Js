//! Імперативний та декларативний код-------------------------------------------------

//? Імперативний код (підхід)

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}
console.log(filteredNumbers); // [4,5]

//? Декларативний код (підхід)

const filteredNumbersTwo = numbers.filter((value) => value > 3);
console.log("🚀 ~ filteredNumbersTwo:", filteredNumbersTwo);

//! Чисті функції ----------------------------------------------------------------------------------

//? Функція з побочними ефектами - функція яка в процессі виконання  може можифікувати або
//? використовувати значення глобальних змінних.

const numbersTwo = [1, 2, 3, 4, 5];

function dirtyFuntion(array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * value;
  }
}

//  dirtyFuntion(numbersTwo, 2);
console.log(numbersTwo);

//? Чисті функції - функція результат якої заадежить тільки від значень аргументів та стабільних змінних
//? локальної області видімості, повертає один результат і не міняє вхідні данні (не мутує)

function pureFunction(array, value) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * value);
  }

  return result;
}

const doubleNumbers = pureFunction(numbersTwo, 2);

console.log(numbersTwo);
console.log("🚀 ~ doubleNumbers:", doubleNumbers);
