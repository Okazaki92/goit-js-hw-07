import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryItem = galleryItems
	.map(
		({ preview, original, description }) =>
			`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
	)
	.join("");
const mainGallery = document.querySelector(".gallery");
mainGallery.insertAdjacentHTML("beforeend", galleryItem);

const imgZoom = (event) => {
	event.preventDefault();
	const img = event.target.dataset.source;
	if (!img) return;
	const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);
	instance.show();
};
mainGallery.addEventListener("click", imgZoom);
const openImg = document.querySelector(".basicLightbox");
openImg.addEventListener("keydown", onEsc);
const onEsc = (e) => {
	e.code === "Escape" ? instance.close() : instance.show();
};
