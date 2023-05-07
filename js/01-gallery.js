import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemsBox = document.querySelector('.gallery');
const galleryBox = galleryItems.map(({ preview, original, description }) =>         `
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

itemsBox.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery')) {
    return;
  }
  
  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width=100% height=100%>
`)

instance.show()
}

 const closeModal = (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

// function defAction(event) {
//    event.preventDefault();
// }
