//! Перебираючі методи масива
//? Синтаксис array.method(callback[currentValue, index, array])

// array.method((item, idx, arr) => {}); // логіка майже кожної ітерації

// array.method((item) => {
//   // логіка яка буде використовуватись для кожної ітерації
// });

//* Array.forEach() - array.forEach(callback[currentValue, index,array])

//* - перебирає (колекцію елементів)
//* - може змінювати (вхідні дані)
//* - не повертає
//* - brake-ом не перивається, як for

const numbers = [1, 2, 3, 4, 5];
//console.log("🚀 ~ numbers:", numbers);

// for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// forEach
// numbers.forEach((num) => console.log(num));
// forEach + доступ до лічільника
// numbers.forEach((num, idx) => console.log(`index ${idx} : value ${num}`));

//* Array.map() - array.map(callback[currentValue, index,array])

//* - перебирає (колекцію елементів)
//* - не змінює (вхідні дані)
//* - повертає колллекцію (новий масив)
//* - використовується для трансформації масива

const doubleArray = numbers.map((num) => num * 2);
// console.log("🚀 ~ doubleArray:", doubleArray);

const users = [
  { id: "001", name: "Mango", isActive: true, daysActive: 10 },
  { id: "002", name: "Poly", isActive: false, daysActive: 5 },
  { id: "003", name: "Qwerty", isActive: true, daysActive: 8 },
  { id: "004", name: "Ajax", isActive: false, daysActive: 2 },
];

const names = users.map((user) => user.name);
// console.log("🚀 ~ names:", names);

//* Array.filter() - array.filter(callback[currentValue, index,array])

//* - перебирає (колекцію елементів)
//* - не змінює (вхідні дані)
//* - повертає колллекцію (новий масив, навіть з 1 елементом)
//* - використовується для фільтрації масива

// console.log(numbers.filter((num) => num > 3));
// console.log(numbers.filter((num) => num === 4));

// знайдемо юзерів які є активними зараз
const activeUsers = users.filter((user) => user.isActive);
// console.log("🚀 ~ activeUssers:", activeUsers);
// знайдемо юзерів які є не активними зараз
const inActiveUsers = users.filter((user) => !user.isActive);
// console.log("🚀 ~ inActiveUsers:", inActiveUsers);

//* Array.find() - array.find(callback[currentValue, index,array])

//* - перебирає (колекцію елементів) до співпадіння і зупиняється
//* - не змінює (вхідні дані)
//* - повертає елемент (1 елемент)
//* - використовується для пошуку унікального елемента масива

console.log(numbers.find((num) => num > 3));
console.log(numbers.find((num) => num < 1));
console.log(numbers.find((num) => num === 3));

// Пройдемось по базі данних і знайдемо унікального юзера
const userX = users.find((user) => user.id === "003");
console.log("🚀 ~ userX:", userX);

// Створимо функцію яка буде повертати на id користувача
function getUserId(arr, id) {
  return arr.find((x) => x.id === id);
}
console.log(getUserId(users, "001"));
console.log(getUserId(users, "004"));
console.log(getUserId(users, "005"));

//* Array.every(). and Array.some()  - array.every(callback[currentValue, index,array])

//* - перебирає (колекцію елементів)
//* - не змінює (вхідні дані)
//* - повертає true / false
//* - every - перевіряє всі елементи, true - коли всі пройшли тест
//* - some - перевіряє всі елементи, true - хоч один пройшов тест

const isBig = (val) => val >= 10;

// every
console.log([12, 5, 3, 6, 130, 44].every(isBig)); // false
console.log([12, 54, 37, 62, 130, 44].every(isBig)); // true

// some
console.log([2, 5, 3, 6, 1, 4].some(isBig)); // false
console.log([1, 5, 3, 62, 1, 4].some(isBig)); // true

// fruits

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "mango", amount: 50 },
];

const allAvailabe = fruits.every((fruit) => fruit.amount > 0);
console.log("🚀 ~ allAvailabe:", allAvailabe);
const anyAvailabe = fruits.some((fruit) => fruit.amount > 0);
console.log("🚀 ~ anyAvailabe:", anyAvailabe);

//* Array.reduce() -
//*  - array.reduce(callback[previousValue, currentItem, index,array], initialValue)

//* - previousValue - проміжний результат (акумулятор)
//* - currentItem - елемент масива
//* - index - індекс елемента масива
//* - array - оригінальний масив
//* - initialValue - тут може бути {}, [], 0 , ""

//* - перебирає (колекцію елементів)
//* - не змінює (вхідні дані)
//* - повертає що за вгодно

const numbersReduce = [1, 2, 3, 4, 5];

const summ = numbersReduce.reduce((acc, value) => acc + value, 0);
console.log("🚀 ~ summ:", summ);

const tweets = [
  { id: "000", likes: 5, tags: ["css", "html"] },
  { id: "001", likes: 7, tags: ["js", "ts"] },
  { id: "002", likes: 10, tags: ["sql", "nodejs", "php"] },
  { id: "003", likes: 9, tags: ["react", "angular", "vue"] },
  { id: "004", likes: 25, tags: ["python", "wordPress", "tailwind"] },
];
// збираємо всі лайки
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log("🚀 ~ likes:", likes);

// зберемо всі тєгі
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);
  return allTags;
}, []);
console.log("🚀 ~ tags ~ tags:", tags);

//* Array.sort() - array.sort(callback[currentValue, index,array])

//* - перебирає (колекцію елементів)
//* - змінює (вхідні дані)
//* - повертає змінену колекцію

const numbersSort = [3, 6, 5, 4, 1, 2, 7];
console.log("🚀 ~ numbersSort:", numbersSort);

//console.log(numbersSort.sort());

//console.log("🚀 ~ numbersSort:", numbersSort);

console.log(numbersSort.toSorted());

console.log("🚀 ~ numbersSort:", numbersSort);

//* - додатньо a > b
//* - відємно a < b

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
console.log("🚀 ~ sortByActiveDays:", users.sort(sortByActiveDays));

//* - Ланцюжкі методів

const numbersMetods = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbersMetods
  .filter((x) => x % 2 === 0)
  .map((y) => y * 2)
  .reverse();
console.log("🚀 ~ result:", result);
