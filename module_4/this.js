// * this
// this - посилається на Пэтю
// Пєтя бижіть швидко, потому що Пєтя пробує піймати поїзд
// Пєтя бижіть швидко, потому що ВІН (THIS Пэтя) пробує піймати поїзд

const petya = {
  name: "Petya",
  showName() {
    console.log(petya.name);
  },
};
petya.showName();
//!У всех функций есть локальная переменная this.
//  Во время исполнения функции в переменную this
//  записывается ссылка на объект в контексте которого она вызывается.

const petyaWithThis = {
  name: "Petya",
  showName() {
    console.log(this.name);
  },
};
petyaWithThis.showName();

//! Значение контекста внутри функции определятся не в момент ее создания,
// ! а в момент вызова.То есть значение this определяется тем,
// ! как вызывается функция, а не где она была объявлена.

function fn() {
  console.log(this);
}
fn(); // ! window без "use strict", undefined з

// ? this в методі (складний варіант)

function showThis() {
  console.log("Тут", this);
}
showThis();

const user = { name: "QWEqwe" };

user.showContext = showThis;
console.log(user);

user.showContext();

// ? this в функціях callback-y
const hotel = {
  name: "Petya",
  showName() {
    console.log(this);
  },
};

function thisThis(callback) {
  // ! Під час виклику thisThis, callback буде посиланням
  // ! на функцію showName обьекта hotel
  // ! ЇЇ виклик проходить в глобальному контексті
  // ! про hotel вона нічого не знає
  // ! Звістно this не буде посилатись на hotel
  callback();
}

// ! Передається посилання на функцію, а ні її виклик
thisThis(hotel.showName);

// ? this в стрілочних функціях

// * Контекст всередині стрілки виявляєтся місцем її оголошення,
// * а ні викликом та посилається на контекст батьківскої функції

const showThisArrow = () => {
  console.log("this in showThis", this);
};
showThisArrow(); // ! undefined

// ?  Методи функцій call, apply, bind
//* call / apply - привязка фугкції як методом до обьекта

function greet() {
  return `Welcome to ${this.name} hotel`;
}
const hotelVasya = { name: "Vasya Best" };
const hotelPetya = { name: "Petya the Best" };

console.log(greet.call(hotelVasya));
console.log(greet.apply(hotelPetya));

// ? call і аргументи (виуликає функцію fn  передав до неї this
// ?  посилання на обьект obj , і аргументи які треба)
// ? call синтаксис.  fn.call(obj, agr1, agr2, ....)

function greetCall(guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}`;
}

const hotelCall = { name: "Taras hotel" };

console.log(greetCall.call(hotelCall, "Qqweqwe", 5));

// ? apply і аргументи (не буде перечислення аршументів,
// ? а передається масив)
// ? apply синтаксис.  fn.apply(obj, [agr1, agr2, ....])

function greetApply(guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}`;
}

const hotelApply = { name: "Ivan hotel" };

console.log(greetApply.apply(hotelApply, ["Qqweqwe", 5]));

// ? bind і аргументи ()
// ? bind синтаксис.  fn.bind(obj, agr1, agr2, ....)
function greetBind() {
  return `Welcome to ${this.name} hotel`;
}
const hotelBind = { name: "Bind Best" };

console.log(greetBind.bind(hotelVasya));
