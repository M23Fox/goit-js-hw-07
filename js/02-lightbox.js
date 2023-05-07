import { galleryItems } from './gallery-items.js';
// Change code below this line
const itemsBox = document.querySelector('.gallery');
const galleryBox = galleryItems
    .map(({ preview, original, description }) =>         `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
          </a>
        </li>`)
      .join('');  
    
itemsBox.insertAdjacentHTML('beforeend', galleryBox);

// itemsBox.addEventListener('click', onImageClick);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
console.log(galleryItems);
