//! ООП побудовано на прототипному насліуванні в JS

//? __proto__ - посилання на інший обьект

// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// console.log(dog.barks);
// console.log(dog.eats);
// console.log("🚀 ~ dog:", dog.__proto__);
// const animal = { eats: true };
// const dog = { barks: true, eats: false };

// dog.__proto__ = animal;

// console.log(dog.barks);
// console.log(dog.eats);
// console.log("🚀 ~ dog:", dog.__proto__);

//? Object.create(obj) - щоб правильно завдати прототип обьекта,
//? використововуємо цей метод

// const animals = { eats: true };
// const dogs = Object.create(animals);
// dogs.barks = true;
// console.log("🚀 ~ dogs:", dogs);

// console.log(dogs.barks);
// console.log(dogs.eats);

//? Object.prototype.hasOwnProperty()

const animals = { eats: true };
const dogs = Object.create(animals);
dogs.barks = true;
console.log("🚀 ~ dogs:", dogs);

for (const key in dogs) {
  console.log(key);
}
for (const key in dogs) {
  if (!dogs.hasOwnProperty(key)) {
    continue;
  }
  console.log(key);
}
//? Object.keys(obj) - поверне тільки власні властивості обьекта в масиві

const dogsKey = Object.keys(dogs);
console.log("🚀 ~ dogsKey:", dogsKey);

//? Funtion.prototype - функція конструктор
//? - це є обьектом
//? - в нього можна записувати властивості і методи
//? - властивості і методи prototype будуть доступні по посиланню
//? - __proto__ обьекту
//? - ц властивості prototype на початку є метод constructor

const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};
// console.log("🚀 ~ Guest ~ Guest:", Guest.prototype);
const mango = new Guest("Mango", 27);
console.log("🚀 ~ mango:", mango);

//* додаємо метод showGuestInfo
Guest.prototype.showGuestInfo = function () {
  console.log(`name guest: ${this.name}, room guest: ${this.room}`);
};
const qwe = new Guest("Qwerty", 39);

mango.showGuestInfo();
qwe.showGuestInfo();

//? Властивість constructor

Guest.prototype = {
  constructor: Guest,
};

//? Наслідування та констуктори

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};
Hero.prototype.farmXp = function (amount) {
  console.log(`${this.name} farm ${amount} experiance points`);
  this.xp += amount;
};
const polly = new Hero("Polly_1999", 1000);
polly.farmXp(999);
console.log("🚀 ~ polly:", polly);

const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);
  this.weapon = weapon;
};
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};
const paladin = new Warrior("Paladin_1988", 500, "Palash");
console.log("🚀 ~ paladin:", paladin);
paladin.attack();
paladin.farmXp(500);
const mag = new Warrior("Mag", 756, "Magic");
console.log("🚀 ~ mag:", mag);
mag.attack();
mag.farmXp(227);
const asasin = new Warrior("Asasin", 903, "wood stick");
console.log("🚀 ~ asasin:", asasin);
asasin.attack();
asasin.farmXp(2);
