// Приведення до числа
const valueA = '5'
console.log(Number(valueA));
console.log(typeof Number(valueA));

// Number.parseInt() - приведе рядок в ціле число

// console.log('x !== z:', x !== z); // false
// console.log(Number.parseInt('5px')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('qweqwe')); // NaN

// Number.parseFloat() - приведе рядок до дробового числа

// console.log(Number.parseFloat('5px')); // 5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('qweqwe')); // NaN

// Перевірка на число - isNaN(змінна)
// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// Math - обьект

//  Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10
// 
// Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10