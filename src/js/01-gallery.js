import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");

const newEl = galleryItems
  .map(
    (el) => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
  )
  .join("");

divEl.innerHTML = newEl;

divEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.className === "gallery__image") {
    const showEl = basicLightbox.create(`
            <img src="${event.target.dataset.source}">
        `);
    showEl.show();

    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        showEl.close();
      }
    });
  }
});

console.log(divEl);
