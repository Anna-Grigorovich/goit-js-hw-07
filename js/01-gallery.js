import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const markupGallery = createMarkup(galleryItems);

galleryContainer.addEventListener('click', handlerContainerClick);

function createMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
      `;
    })
    .join('');
}

galleryContainer.innerHTML = markupGallery;

function handlerContainerClick(evt) {
  evt.preventDefault();
  const imgEl = evt.target.classList.contains('gallery__image');
  const largeImg = evt.target.dataset.source;
  if (!imgEl) {
    return;
  }
  const handleModalClose = evt => {
    if (evt.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', handleModalClose);
    }
    console.log(evt);
  };
  const instance = basicLightbox.create(
    `
    <img src=${largeImg} width="800" height="600">
`,
    {
      onShow: instance => {
        window.addEventListener('keydown', handleModalClose);
      },
    },
  );
  instance.show();
}
