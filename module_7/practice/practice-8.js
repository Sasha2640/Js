import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function createGallery(images) {
  const makeitem = images
    .map(
      ({ preview, original, description }) => `
  <li>
    <a href='${original}'>
        <img src="${preview}" alt="${description}" >
    </a>
  </li>
    `
    )
    .join("");
  galleryList.insertAdjacentHTML("afterbegin", makeitem);
}

createGallery(galleryItems);

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionSelector: "img",
//   captionType: "attr",
//   captionsData: "alt",
//   captionDelay: 250,
// });
