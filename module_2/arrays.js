// array - массив для зберігання данних і маніпулювання їй
// можуть зберігати примітиві данних (рядки,числа...)

// Знайти останій елемент масиву
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// let arr1 = [];
// const clients = ["Mango", "Poly", "Kate"];
// console.log("🚀 ~ clients:", clients);
// console.log(clients[1]); // Poly
// console.log(clients[0]); // Mango

// Перепризначення
// clients[0] = "Kiwi";
// console.log("🚀 ~ clients:", clients);
// // Додавання
// clients[3] = "Alex";
// console.log("🚀 ~ clients:", clients);
// // Довжина миссиву
// console.log(clients.length); // 4

// clients.length = 5
// console.log(clients); // додає пусте місце
// console.log(clients[5]); // але його не знайдено

// clients.length = 2
// console.log(clients); // стерлося і залишилось 2 елемента

// Ітерація по масиву
// for

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("index client", i);
//   console.log("client", clients[i]);
// }

// заповнити данними массив
// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`element-${i}`);
// }
// console.log("🚀 ~ numbers:", numbers);

// for..of - перебирає елементи, тіло циклу буде працювати
// для кожного елемента массива (добрий, якщо не потрібен
// доступ по лічильника )

// for (const element of object) {
// тіло
// }
// ітерація по масиву
// for (const client of clients) {
//     console.log("🚀 ~ client:", client)
// }
// ітерація по рядку
// const string = "javascript";
// for (const bukva of string) {
//     console.log("🚀 ~ bukva:", bukva)

// }

// break інструкція

// const clientNameToFind = "Pol";
// let message = "Client not find";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Client find";
//     break;
//   }
//   // message = 'Client not find'
// }
// console.log(message);

// continue інструкція

// const numbs = [1, 3, 14, 35, 2, 7, 345, 89];
// const max = 15;
// const maxNum = [];

// for (const number of numbs) {
//   if (number < max) {
//     continue;
//   }
//   console.log("Більше ніж мах", number);
//   maxNum.push(number);
// }
// console.log("🚀 ~ maxNum:", maxNum);

//TODO: № 1 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
// ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// const musici = ["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"];
// function logItems(musici) {
//   for (let i = 0; i < musici.length; i += 1) {
//     console.log(`${i + 1} - ${musici[i]}`);
//   }
// }
// logItems(musici);
//TODO: № 2  for...of ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// const numbrs = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// function findSmallerNumber(numbrs) {
//   // for (const numberss of numbrs) {
//   //   let smallest = numberss[0];
//   //   for (let i = 1; i < numbrs.length; i += 1) {
//   //     if (numbrs[i] < smallest) {
//   //       smallest = numbrs[i];
//   //     }
//   //   }
//   //   return smallest;
//   // }
//   let smallest = numbrs[0];
//   for (const numbr of numbrs) {
//     if (smallest > numbr) {
//       smallest = numbr;
//     }
//   }
//   return smallest;
// }
// console.log("Найменше", findSmallerNumber(numbrs));

// function checkString(string) {
//   let isCheck;
//   if (string && 0) {
//     isCheck = false;
//   } else {
//     isCheck = true;
//   }
//   return isCheck;
// }
// console.log(checkString("true || false"));

// Призначення по посиланню та по значенню

// по значченню для простих
let a = 5;
// зробимо ще одну змінну і створимо ще одну ячейку в памяті
let b = a;
// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);

// поміняємо значення для а
a = 10;
// b нічого не помінялось
// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);

// по посиланню для складних типів
const c = ["Mango"];
// зробимо ще одну змінну і створимо ще одну ячейку в памяті
const d = c;
// console.log("🚀 ~ c:", c);
// console.log("🚀 ~ d:", d);
// додамо щось в c
c.push("qweqwe");
// console.log("🚀 ~ c:", c);
// в d є посилання на основний массив
// console.log("🚀 ~ d:", d);

d.push("abc");
// console.log("🚀 ~ c:", c);
// console.log("🚀 ~ d:", d);

// Методи массиву ===================================================================

// split(разделітель) - дозволяє перетворити рядок в массив, разбив
// її по разделітелю :)
const hello = "Hello world, people";
console.log(hello.split(" "));

const arrayHello = hello.split(" ");
// console.log(hello.split(""));

//join(разделітель) - бере массив і зєднює його в рядок використовує разделітель

console.log(arrayHello.join(" "));
console.log(arrayHello.join(","));
console.log(arrayHello.join("_"));

// indexOf(index) - повертає перший індекс в якому є елемент, якщо не
// знайшов, то поверне -1

console.log(hello.indexOf("world"));
console.log(hello.indexOf("hey"));

// includes(boolean) - повертає буль, чи має вишукфване значення, массив

console.log(hello.includes("world"));
console.log(hello.includes("hey"));

// push() - додає на кінець массиву

arrayHello.push("qweqwe");
console.log(arrayHello);
// pop() - прибирає з кінця массиву
arrayHello.pop("qweqwe");
console.log(arrayHello);
// unshift() - додає на початку массиву
arrayHello.unshift("qweqwe");
console.log(arrayHello);
// shift() - прибирає на початку массиву
arrayHello.shift("qweqwe");
console.log(arrayHello);

// slice() - для рядків та масивів.
// slice(begin, end) - синтаксис, begin - від  , end - до (але не включаючи)
// не змінює початковий массив, а повертає копію

const clients = ["Mango", "ajax", "Poly", "Kiwi", "Kasper"];
// console.log(clients.slice(1, 3));
// console.log(clients.slice());
// console.log(clients.slice(1));
// console.log(clients.slice(-2));

// splice() - можна видаляти, додавати, і заміняти
// змінює початковий массив
// splice(position, num) - position - позиція першого елементу для видаляння
// num - кількість елементів для видалення

const scores = [1, 2, 3, 4, 5];
// const deleteScores = scores.splice(0, 3);
// змутував наш массив
console.log(scores); // [4,5]
// не мутуючий метод toSplice()
const toDeleteSplice = scores.toSpliced(0, 3);
console.log(scores); // [4,5]
// залишились видаленні елементи
console.log("🚀 ~ toDeleteSplice:", toDeleteSplice);
// console.log("🚀 ~ deleteScores:", deleteScores);

// splice-додавання
// синтаксис splice(position, 0, new_el_1, new_el_2, ...)
// position - початкова позиція в масиві, де будуть додаватись нові елементи
// 0 - він каже методу не видаляти кількість елементів
// new_el_1 - це нові елементи які вставляють в массив
const colors = ["red", "blue", "green"];
colors.splice(2, 0, "purple");
colors.splice(3, 0, "black", "yellow");
console.log(colors);

// splice-заміна - додає новий елемент, одночасно видаляю інший
// синтаксис splice(position, 1, new_el_1, new_el_2, ...)
// position - початкова позиція в масиві, де будуть додаватись нові елементи
// 1 - він каже методу який треба видаляти елемент
// new_el_1 - це нові елементи які вставляють в массив

const languages = ["C", "C+", "JS", "Java"];
languages.splice(1, 1, "Python");
console.log(languages);
languages.splice(2, 1, "C#", "Go", "PHP");
console.log(languages);

// concat() - поєднює два або більше миссивів, не мутуючий
// array_1.concat(array_2)
const total = colors.concat(languages);
console.log("🚀 ~ total:", total);

// Задачка на slice
// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
// }

// перевірка коду 👇

// Задачка на includes
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// function checkForSpam(message) {
//   message = message.toLowerCase();
//   if (message.includes("spam") || message.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// return message.toLowerCase().includes("spam") ||
// message.toLowerCase().includes("sale");
// }

// // перевірка коду 👇
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// TODO № 1 ==========================
// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!

// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для mysite.com/posts/arrays-for-beginners.

// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.

// З цим розібралися? А тепер давай нарешті виконувати задачу!

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// function slugify(title) {
//   title = title.toLowerCase();
//   const text = title.split(" ");
//   return text.join("-");
//   return title.toLowerCase().split(" ").join("-");
// }

// console.log(slugify("English for developer"));
// // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
// ODO № 2 ==========================================
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.
// function makeArray(array1, array2, maxLength) {
//   let finalArray = array1.concat(array2);
//   if (finalArray.length > maxLength) {
//     return finalArray.slice(0, maxLength);
//   } else {
//     return finalArray.slice();
//   }
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// // Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// TODO № 3 ============================================
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

function filterArray(numbers, value) {
  const finalNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      finalNumbers.push(number);
    }
  }
  return finalNumbers;
}
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
