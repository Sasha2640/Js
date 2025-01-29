const span = document.querySelector(".span");
console.log(span.parentNode);
console.log(span.childNodes);
console.log(span.children);
console.log(span.firstChild);
console.log(span.firstElementChild);
console.log(span.lastChild);
console.log(span.lastElementChild);
console.log(span.previousElementSibling);
console.log(span.nextSibling);
console.log(span.nextElementSibling);

const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");
console.log(`Кількість категорій: ${categoryItems.length}`);
