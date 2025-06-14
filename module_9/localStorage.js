//! Web Storage API

//? sessionStorage - сессійне сховище, тоді коли відрити вікна, данні зберігаються
//? коли закрити вкладку, то данні не зберігаються, сховище очищене

//? localStorage - локальне сховище, яку охоплює декілько вікон і зберігає
//? після поточного сеанса (налаштування профілю, данні користувача, зміст корзини товарів)

// зберігати дані без терміна дії і зберігати в форматі ключ:значення
//! не зберігають методі або функції, тільки данні

//? доступно таким чином window.localStorage

// localStorage.setItem(key, value);

// localStorage.setItem("theme", "light"); // - зберігається в рядках

// метод JSON.stringify()

const settings = {
  theme: "dark",
  isAuth: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

//! JSON - сучасний формат зберігання та передачі даних
// {
//     'name': 'josn',
//         "age": 18,
// }

//? JSON.stringify(obj) - передаємо JS-обьект для перетворення в JSON
const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
};
const dogJSON = JSON.stringify(dog);
console.log("🚀 ~ dogJSON:", dogJSON);

//? JSON.parse(string) - звротніа операція, щоб перетворити рядок-обьект
//? назад у JS-обьект
const json = '{"name":"Mango","age":3,"isHappy":true}';
const dogObj = JSON.parse(json);
console.log("🚀 ~ dogObj:", dogObj);

//? localStorage.getItem(key) - читання з локального сховища
// const theme = localStorage.getItem("theme");
// console.log("🚀 ~ theme:", theme);

const saveSettings = localStorage.getItem("settings");
console.log("🚀 ~ saveSettings:", saveSettings);
const parsedSettings = JSON.parse(saveSettings);
console.log("🚀 ~ parsedSettings:", parsedSettings);

//? localStorage.removeItem(key) - видаляю по ключу данні

// localStorage.removeItem("theme");

// TODO: ЗАДАЧА  на LocalStorage =========================================

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін темo

// const refs = {
//   body: document.querySelector("body"),
//   checkbox: document.querySelector(".checkbox"),
// };
// const THEME_KEY = "theme";
// const themeLight = "light-theme";
// const themeDark = "dark-theme";

// const getTheme = localStorage.getItem(THEME_KEY);

// switch (THEME_KEY) {
//   case themeDark:
//     refs.body.classList.add("dark");
//     refs.checkbox.checked = true;
//     break;

//   case themeLight:
//     refs.body.classList.add("light");
//     refs.checkbox.checked = false;
//     break;

//   default:
//     refs.body.classList.add("light");
//     refs.checkbox.checked = false;
//     break;
// }

// refs.checkbox.addEventListener("click", () => {
//   if (refs.checkbox.checked === false) {
//     localStorage.setItem(THEME_KEY, themeLight);
//     refs.body.classList.add("light");
//     refs.body.classList.remove("dark");
//   }
//   if (refs.checkbox.checked === true) {
//     localStorage.setItem(THEME_KEY, themeDark);
//     refs.body.classList.add("dark");
//     refs.body.classList.remove("light");
//   }
//   console.log(refs.checkbox.checked);
// });
const refs = {
  body: document.querySelector("body"),
  checkbox: document.querySelector(".checkbox"),
};
const THEME_KEY = "theme";
const themeLight = "light-theme";
const themeDark = "dark-theme";

const savedTheme = localStorage.getItem(THEME_KEY);

switch (savedTheme) {
  case themeDark:
    refs.body.classList.add("dark");
    refs.checkbox.checked = true;
    break;

  case themeLight:
    refs.body.classList.add("light");
    refs.checkbox.checked = false;
    break;

  default:
    refs.body.classList.add("light");
    refs.checkbox.checked = false;
    break;
}

refs.checkbox.addEventListener("click", () => {
  const isChecked = refs.checkbox.checked;
  const newTheme = isChecked ? themeDark : themeLight;

  localStorage.setItem(THEME_KEY, newTheme);

  switch (newTheme) {
    case themeDark:
      refs.body.classList.add("dark");
      refs.body.classList.remove("light");
      break;
    case themeLight:
      refs.body.classList.add("light");
      refs.body.classList.remove("dark");
      break;
  }
  console.log(isChecked);
});
