import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(`.gallery`);

const galleryMarkup = galleryItems.map((galleryItem) =>
    `<li class="gallery__item">
    <a class="gallery__link" href= "${galleryItem.original}">
    <img class="gallery__image" src = "${galleryItem.preview}" alt = "${galleryItem.description}"/>
    </a>
    </li>
`).join(``);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
  