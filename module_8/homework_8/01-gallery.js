import { galleryItems } from "../gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join("");

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const clickedImg = event.target;
  if (clickedImg.nodeName !== "IMG") return;

  const largeImageURL = clickedImg.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${clickedImg.alt}" />
  `);

  instance.show();
}
