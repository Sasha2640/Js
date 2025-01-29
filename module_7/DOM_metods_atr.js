// !  DOM - властивості та артибути

//? elem.textContent (elem.innerText) - властивість, має в собі текстовий
//? контент всередині елемента
const div = document.querySelector(".div-el");
div.textContent = "another text";
// div.innerText = "another text";

//? elem.style.metod - можемо встановлювати інлайнові стилі
//div.style.backgroundColor = "teal";

//? Додавати / видаляти / заміняти класи на елементах

//? elem.classList.contains(nameClass) - повертає true|false в залежності
//? є тей класс чи не має
const classIf = div.classList.contains("div-el");
console.log("🚀 ~ classIf:", classIf);

//? elem.classList.add(nameClass) - додати класс до елемента
div.classList.add("accent");

//? elem.classList.remove(nameClass) - видаляє класс з елемента
div.classList.remove("accent");
// div.classList.remove("div-el"); забирає і наданий класс

//? elem.classList.replace(oldClass, newClass) - заміна класса старий на новий

//? elem.classList.toggle(nameClass) - якщо класа вказанного немає, то
//? додає, якщо він є, то прибирає

//div.classList.toggle("accent");
//div.classList.toggle("accent");

//! DOM - атрибути (value, hidden, checked, name, src)

//? elem.hasAttribute(name) - повертає true|false чи є чи не має данно атрибуту

//? elem.getAttribute(name) - отрумає і повертає значення атрибуту

//? elem.setAttribute(name, value) - встановлює артибут
div.setAttribute("id", "123");

//? elem.removeAttribute(name) - видаляє атрибут
div.removeAttribute("id");

//? elem.attributes - повертає колекцію всіх атрибутів елемента

//? elem.dataset.nameData - надавати додаткові атрибути

const btnGo = document.querySelector("button");
console.log("🚀 ~ btnGo:", btnGo);
const btnGoData = btnGo.dataset.action;
console.log("🚀 ~ btnGoData:", btnGoData);
