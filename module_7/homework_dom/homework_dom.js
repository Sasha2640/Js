const span = document.querySelector(".span"); // +++
const ul = document.querySelector(".ul");
const li = document.querySelector(".first");
const li2 = document.querySelector(".second");
console.log(span.parentNode); // +++
console.log(ul.childNodes); // +++++++++++++++++++++++++++++++++++++++++++++++++
console.log(ul.children); // +++
console.log(li2.children); // +++
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastChild);
console.log(ul.lastElementChild);
console.log(li.previousElementSibling);
console.log(li2.previousElementSibling);
console.log(li.nextSibling);
console.log(li2.nextElementSibling);

// const categoriesList = document.querySelector("#categories");
// const categoryItems = categoriesList.querySelectorAll(".item");
// const totalCategory = categoryItems.length;
// console.log("🚀 ~ totalCategory:", totalCategory);

// console.log(`Кількість категорій: ${categoryItems.length}`);

// console.log(categoryItems);
// console.log(categoriesList);
// categoryItems.forEach((category) => {
//   //const categoryTitle = category.querySelector("h2").textContent;
//   const categoryTitle = category.firstElementChild.textContent;

//   //const categoryItems = category.querySelectorAll("ul li").length;
//   const categoryItems = category.lastElementChild.children.length;

//   console.log(`Категорія: ${categoryTitle}`);
//   console.log(`Кількість елементів у категорії: ${categoryItems}`);
// });
