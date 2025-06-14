//! Роширення подій (event propagation) - включає в себе 3 важливиї події (затоплення -> таргетінг -> спливання)

//? Capture phase - подія яка починаеється на window  і тоне (проходить через всі вузли-нащадки) до самого глибокого цільового елемента де сталася подія
//? Tagret phase - подія дошла до самого шдибокого цільового елемента. тільки повідомлення вузла на якім сталася подія
//? Bubbling phase - заключающаяся фаза, подія спливає  від самого нлибокого елемента через всі вузли-нащадки до window

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

const parentClick = () => alert("Parent click");
const childClick = () => alert("child click");
const innerChildClick = () => alert("innerChild click");

// parent.addEventListener("click", parentClick);
// child.addEventListener("click", childClick);
// innerChild.addEventListener("click", innerChildClick);

//? Спливання подій - при початку подіїб обробники зпочатку спрацьовують на
//? самим вложеним елементом, потім на його батьку, а потім вище і тп по ланьцюжку

//! Цілоьвий елемент - event.target / event.currentTarget

//? event.target - це посилання на вихідний елементб на якому сталася
//? подія, в процесі спливання він не помінявся

//? event.currentTarget - це поточний елемент до якого дошла подія
//? на ним зараз виконується обробник

const handleClick = (event) => {
  alert(`Event now is: ${event.target.id}`);
  console.log(`Event is: ${event.target}`);
};

parent.addEventListener("click", handleClick);

//! Зупинка спливання
//? event.stopPropagation() - зупиняє просування події далі
//? але на діючим елементі всі обробники виконуються

//? event.stopImmediatePropagation() - зупиняє повністю обробку події
//? але і на діючим елементі всі обробники зупиняються

//! Делегування подій - це засіб оптимізації інтерфейсаб ми використовуємо
//! один обробник для схожих дій на одинокамиї елементах

const nav = document.querySelector(".js-nav");

nav.addEventListener("click", navClick);

function navClick(event) {
  event.preventDefault();

  const target = event.target;
  console.log("🚀 ~ navClick ~ target:", target);

  if (target.nodeName !== "A") return;

  activeLink(target);
}

function activeLink(target) {
  const currentLink = nav.querySelector("a.active");

  if (currentLink) {
    currentLink.classList.remove("active");
  }
  target.classList.add("active");
}
AOS.init();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// =========================================

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debounceOutput = document.querySelector(".output.debounced");

const eventCounter = {
  vannila: 0,
  throttled: 0,
  debounce: 0,
};

document.addEventListener("scroll", () => {
  eventCounter.vannila += 1;
  vanillaOutput.textContent = eventCounter.vannila;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 500)
);
document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter.debounce += 1;
    debounceOutput.textContent = eventCounter.debounce;
  }, 500)
);
