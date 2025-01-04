//! Class - це зручний спосіб ждя задання конструктора разом з прототипом

//? - весь код всередині класса виконується в суворому режимі
//? - всі методи являються не перечисленими
//? - у всіх методів класса відсутні внутрішній метод [construct]
//?   значить при спробі використати ці методи з оператором new буде помилка
//? - виклик конструктора класс без оператора new буде помилка

class Car {}
console.log("🚀 ~ Car:", typeof Car);
const bmw = new Car();
console.log("🚀 ~ bmw:", bmw);

class Guest {
  //* ----==  публічні та приватні властивості класс-а ===------
  #email;
  constructor(name, email, roomNumber) {
    this.name = name;
    this.#email = email;
    this.roomNumber = roomNumber;
  }
  //* ----==  публічні та приватні методи класс-а ===------
  #validateEmail() {
    return email.includes("@");
  }
  //* ----==  статичні властивості та методи класс-а ===------
  static myProp = "value";

  static get PI() {
    return 3.14;
  }
  static add(...args) {
    return args.reduce((acc, next) => acc + next, 0);
  }

  //* ----==  методи класс-а ===------
  getFullInfo() {
    console.log(`Guest ${this.name} have room number ${this.roomNumber}`);
  }
  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    this.#email = newEmail;
  }
  //* ----==  get/set, геттери та сеттери ===------
  get getName() {
    return this.name;
  }
  set changeName(value) {
    this.name = value;
  }
}
const mango = new Guest("Mango", "user@gmail.com", 28);
console.log("🚀 ~ mango:", mango);
console.log("🚀 ~ mango:", mango.getEmail());
mango.changeEmail("mango@gmail.com");
console.log("🚀 ~ mango:", mango.getEmail());

// console.log("🚀 ~ mango:", mango.#email);  // помилку видає
//* ----==  методи класс-а ===------
mango.getFullInfo();
//* ----==  get/set, геттери та сеттери ===------
console.log(mango.getName);
mango.changeName = "Mango Qwert";
console.log(mango.getName);
//* ----==  статичні властивості та методи класс-а ===------
console.log(Guest.PI);
console.log(Guest.add(2, 3, 4));

//! Наслідування в классах

// class Child extends Parent {

// }

class Animal {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`I, ${this.name}, am moving`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log("woof! woof!");
  }
  moveAndMakeSound() {
    super.move();
    this.bark();
    this.bark();
  }
}

const bullDog = new Dog("Mango", "buuldog");

bullDog.move();
bullDog.bark();
bullDog.moveAndMakeSound();
