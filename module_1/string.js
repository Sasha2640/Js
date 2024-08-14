// const name = 'Mango'
// const message = 'Mango ' + 'is' + ' happy';
// console.log(message); // Mango is happy
// // Теперь посмотрим на порядок операндов
// let result;

// result = 5 + '5';
// console.log(result); // '55'
// console.log(typeof result); // string

// result = 5 + '5' + 5;
// console.log(result); // '555'
// console.log(typeof result); // string

// /*
//  * Обратите внимание, произошла математическая операция
//  * сложения для первых двух пятерок, после чего 10 было
//  * преобразовано в строку '10' и сшито с '5'
//  */
// result = 5 + 5 + '5';
// console.log(result); // '105'
// console.log(typeof result); // string

// Методи та властивості рядків

const message = 'Welcome to Bahamas!';
// всі методи чутливі до РеГістРу

// .toLowerCase() - робить всі літері маленькими
// .toUpperCase() - робить всі літері ВЕЛИКИМИ
console.log(message.toLowerCase()); // welcome to bahamas!
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// .length() - довжина рядка з урахуванням пробілу(пробіл теж символ)
// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// .indexOf() - знаходить звітки починаеться пошукове слово,
// повертає index слова, якщо не знайшов то поверне -1
// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1

// .includes() - шукає слово і повертає true або false
// console.log(message.includes('welcome')); // false
// console.log(message.includes('Welcome')); // true

// / Используя переменные необходимо составить строку с подставленными значениями
// const name = 'Mango';
// const age = 2;
// const mood = 'happy';

// const message =
//   'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';

// console.log(message); // My name is Mango, I'm 2 years old and happy.

// /*
//  * Составлять строки с подставляемыми значениями
//  * используя конкатенацию очень неудобно.
//  * На помощь приходят шаблонные строки и интерполяция.
//  */
// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

// console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// // В интерполяции можно использовать любое валидное выражение
// console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.