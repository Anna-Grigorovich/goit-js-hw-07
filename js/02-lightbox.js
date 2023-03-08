import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markupGallery = createMarkup(galleryItems);

function createMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
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
    .join('');
}

galleryContainer.innerHTML = markupGallery;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});
