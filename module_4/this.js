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
