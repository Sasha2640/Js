//! Функція-конструктор - це звичайна функція до якої застосовали оператор new
//! Це робить до створювання нового обьекта та виклику функції в контексті цього обьекта.

//? Конструктори називають з великої букви, а в самої назві показують тип створюванного обьекту
//? Object, Array, Number, String

//? - створюється обьект
//? - функція-конструктор викликається в контексті цього обьекта
//? - this всередині конструктора отримує посилання на цей обьект
//? - констуктор викликається, модифікує this додає властивості і методи
//? - this - повертається

// const Hotel = function (name, stars, capacity) {
//   // this = {}    (під капотом інтерпритатор створює в this обьект)
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;

//   // return this  (під капотом інтерпритатор повертає this)
// };

// const gotel = new Hotel("Resort Hotel", 5, 100);
// const notel = new Hotel("Best Hotel", 10, 150);

// console.log("🚀 ~ notel:", notel);
// console.log("🚀 ~ gotel:", gotel);

//! Додаемо методи

const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
  this.questCount = 0;

  this.greet = function (guestName) {
    console.log(`Hello ${guestName}, welcome to ${this.name}`);
  };
  this.addGuests = function (amount) {
    this.questCount += amount;
  };
  this.removeGuests = function (amount) {
    this.questCount -= amount;
  };

  // return this  (під капотом інтерпритатор повертає this)
};

const gotel = new Hotel("Sunrise Hotel", 5, 100);

console.log("🚀 ~ gotel:", gotel);

gotel.greet("Mango");
gotel.addGuests(50);
gotel.removeGuests(25);

//*  Practice
const mango = {
  name: "mango",
  sales: 5,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  },
};

const Manager = function (
  name = "Manager",
  sales = 0,
  plusSales = 0,
  sallary = 500
) {
  this.name = name;
  this.sales = sales;
  this.sallary = sallary;
  this.plusSales = plusSales;

  this.sell = function (product) {
    this.sales += 1;
    this.plusSales += 50 * this.sales;
    this.sallary += this.plusSales;
    // console.log("🚀 ~ plusSales:", plusSales);
    // console.log(`Manager ${this.name} sold ${product}`);
    return `Manager ${this.name} sold ${product}`;
  };
};
const qweqwe = new Manager("qweqwe", 5);
console.log("🚀 ~ qweqwe:", qweqwe.sales);
console.log("🚀 ~ qweqwe:", qweqwe.sell("mango"));
console.log("🚀 ~ qweqwe:", qweqwe.sell("televizor"));
console.log("🚀 ~ qweqwe:", qweqwe.sallary);
const stepan = new Manager("Stepan", 10);
console.log("🚀 ~ stepan:", stepan.sell("laptop"));
console.log("🚀 ~ stepan:", stepan.sales);
console.log("🚀 ~ stepan:", stepan.plusSales);
console.log("🚀 ~ stepan:", stepan);
const vasyl = new Manager("Main-Manager Vasyl", 100, 1500);
console.log("🚀 ~ vasyl:", vasyl.sallary);
// TODO -+ another managers(two)
// TODO -+ sallary for managers
// TODO -+ have a procents fot sellers
