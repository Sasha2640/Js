// Object - що цим можно описати: якусь сутність, користувача, гостя, продукту,
// або потрібна якась структура в одному місці
// Обьект - це набір властивостей і методів
// Синтаксис - { } , кодна властивість описується -> ключ:значення -> key:value
const hotel = {}; // пустий обьект
// ключ - це завжди рядок, ("ключ" - яийЗавгодноРядок, або починається з
// букви або з _ / $ буз пробілів) значення може бути що за вгодно, примитиви,
// масиви  обьекти, булі, функцію

const hotelFirst = {
  name: "California",
  stars: 5,
  capacity: 100,
};
console.log(hotelFirst);

// Доступ до властивостей
console.log(hotelFirst.name); // стукаємось до властивості
hotel.name = "Zirochka"; // додаємо властивость до обьекта
hotel.stars = 3; // додаємо властивость до обьекта
console.log(hotel); // стукаємось до властивості
hotelFirst.name = "Nadiya";
console.log(hotelFirst.name); // стукаємось до властивості
console.log(hotelFirst["name"]); // стукаємось до властивості
// Видалення властивостей оператор delete
delete hotel.stars;
console.log(hotel);
// Відсутні властивості - undefined
console.log(hotel.stars);
// Короткі властивості

let stars = 4;
// ES5 - було би так
const gotelEs5 = {
  name: "Gotel Zowtyy",
  stars: stars,
};
console.log(gotelEs5);
// ES6 - було би так
const gotelEs6 = {
  name: "Gotel Zelenyy",
  stars,
};
console.log(gotelEs6);

// Методи обьекта - це функції

const hotelMain = {
  name: "Prykarpatskie",
  stars: 5,
  // ES5
  greetES5: function () {
    return "Welcome to Zakarpatskie";
  },
  // ES6
  greetES6() {
    console.log("Welcome to nowe Zakarpatskie");
  },
};
console.log(hotelMain.greetES5());
hotelMain.greetES6();

// Додавати методи  по обьектів

hotelMain.greetGosti = function (name) {
  console.log(`Welcome to Home ${name}`);
};
hotelMain.greetGosti("Qweqwe");

// this - контекст обьекта, для доступу цього самого обьекту в методі
// використовується не ім'я обьекта, а ключове слово this - контекст

let name = "Pidpolnyy Hotel"; // якщо не буде this на 81 , то на 87 рядку
// буде інша назва готелю

const hotelThis = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name); //  якщо видалити this, то контекст втатився
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotelThis.showName(); // Resort Hotel

hotelThis.changeCapacity(200);
console.log(hotelThis.capacity); // 200

//TODO: № 1 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у console.log()

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";
console.log(user);
// Описати: IT - компанію;
// Продукт;
const ItCompany = {
  name: "Prikarpatye",
  clents: 56,
  employents: 10,
  tasks: 21,
  profit: "100500 deneg",
};
console.log(ItCompany);
const product = {
  name: "mango",
  weigth: "500gram",
  calories: "150cal",
  price: "2$",
};
console.log(product);
