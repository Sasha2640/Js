//! Створення елементів
//? document.createElement(tagName)

const p = document.createElement("p"); // це частина js, в DOM його не має
// console.log("🚀 ~ p:", p);
p.textContent = "This is p";
console.log("🚀 ~ p:", p);

const img = document.createElement("img");
img.setAttribute("src", "https://random.black/images");
img.setAttribute("alt", "nature");
console.log("🚀 ~ img:", img);

//! Додавання елемента
//? parentEl.appendChild(elem)
const divEl = document.querySelector(".div-el");
divEl.appendChild(p);
// divEl.appendChild(img);

//? parentEl.insertBefore(tagName, nextSibling)

//divEl.insertBefore(img, p);

//! Методи append/prepend, before/after, replaceWith
divEl.prepend(img);
//* append - додає в кінець елемента
//* prepend - додає на початок елемента
//* after - додає після вузла елемента
//* before - додає перед вузлом елемента
//* replaceWith - додає замість елемента

//! Видалення елемента
//* parent.removeChild(elem) - oldSchool
//* elem.remove() - new

//! innerHTML - властивість, яка дозволяє отримати вміст елемента,
//! включая тегі в виді рядка

const div = document.querySelector(".div");
console.log("🚀 ~ div:", div);
const htmlStr = "Не відволікайся на уроку";
const htmlNext = "<p> тому що це важиво!!</p>";
div.innerHTML += htmlStr;
div.innerHTML += htmlNext;

//! element.insertAdjacentHTML(position, string) - метод додавання
//? position - позиція відносно елемента (beforebegin,afterbegin, beforeend, afterend)
//? beforebegin - перед елементом
//? afterbegin - всередину елемента, але в початок контента
//? beforeend - всередину елемента, але в сам кінець контента
//? afterend - після елемента

const addHeiding = "<h1>Beforebegin add heiding one</h1>";
divEl.insertAdjacentHTML("afterbegin", addHeiding);
