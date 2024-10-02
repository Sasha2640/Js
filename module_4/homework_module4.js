//?--------------------------------------------------------------TODO № 1----------------------------------------------------------------
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній  **
//?---------------------------------------------------------
// -Перевірка чи промпт не порожній
//     - Передання в колбек
//     - виведення повідомлення
//?---------------------------------------------------------
function letMeSeeYourName(callback) {
  //   const name = prompt("Ведіть ваше імя");
  //while (name === " ") {
  //   name = prompt("Поле не може бути пустим! Ведіть своє імя");
  // }
  if (name === " ") {
    alert("Введіть імя");
    return;
  }
  return callback(name);
}
letMeSeeYourName(greet);
function greet(name) {
  console.log(`Привіт ${name}`);
}

//?-------------------------------------------------------TODO № 2 з колбеком-----------------------------------------------------------
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
//?---------------------------------------------------------
// -ствщрити функцію
// -створити id
//  - сторити обєкт
// - вивести значення обєктів
//?---------------------------------------------------------
function makeProduct(name, price, callback) {
  const id = Date.now();
  const product = {
    id: id,
    name: name,
    price: price,
  };
  return callback(product);
}
const productShow = (product) => product;
console.log(makeProduct("qweqwe", 12, productShow));

makeProduct("mango", 12, showProduct);

function showProduct(product) {
  console.log(`Продукт : ${product.name}`);
  console.log(`Ціна : ${product.price}`);
  console.log(`ID : ${product.id}`);
}
//?--------------------------------------------------------- Задача 3. Профіль гравця ---------------------------------------------------------
// Об’єкт profile описує профіль користувача на ігровій платформі. У його властивостях зберігається ім’я
// профілю username та кількість активних годин playTime, проведених у грі.
// Доповни об’єкт profile методами для роботи з його властивостями.
// Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
// Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
const profile = {
  username: "Jacob",
  playTime: 300,
};
// function changeUserName(newName) {
//   let promptName = prompt("Введіть нове імя!");
//   console.log(promptName);

// let profile {username: newName};
// }

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
//?--------------------------------------------------------- Задача 1. Пакування товарів ---------------------------------------------------------

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.

// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.
function isEnoughCapacity(products, containerSize) {
  let values = Object.values(products);
  let counter = values[0] + values[1] + values[2];
  if (counter <= containerSize) {
    console.log("Вантаж поміститься!");
  } else {
    console.log("Вантаж не поміститься!");
  }
  return counter;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
