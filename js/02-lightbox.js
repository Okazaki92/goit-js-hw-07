import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryItem = galleryItems
	.map(
		({ preview, original, description }) =>
			`<a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}"/>
            </a>`,
	)
	.join("");
const mainGallery = document.querySelector(".gallery");

mainGallery.insertAdjacentHTML("beforeend", galleryItem);

const lightbox = new SimpleLightbox(".gallery a", {
	captions: true,
	captionsData: "alt",
	captionDelay: 250,
});
