import './sass/main.scss';
import arrCdn from './app.js';

const galleryContainer = document.querySelector('.js-gallery');
const createItemGalleryMarkup = creatGalleryMarkup(arrCdn);
const ligthBox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeLigthBoxBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
galleryContainer.insertAdjacentHTML("afterbegin", createItemGalleryMarkup);
galleryContainer.addEventListener('click', onOpenImageGalleryClick);
closeLigthBoxBtn.addEventListener('click', onCloseLigthBoxClick);
lightboxOverlay.addEventListener('click', onCloseLightboxOverlayClick);

let indexlightboxImage = 0;

import creatGalleryMarkup from './creatGalleryMarkup'


function onOpenImageGalleryClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  window.addEventListener('keydown', onKeyEscPress);
  window.addEventListener('keydown', onArrowBtnPress);
  const imgSrc = event.target.dataset.source;
  const alt = event.target.alt;
  indexlightboxImage = +event.target.dataset.number;
  ligthBox.classList.add('is-open');
  lightboxImage.src = imgSrc;
  lightboxImage.alt = alt;
}

function onCloseLigthBoxClick() {
  window.removeEventListener('keydown', onKeyEscPress);
  window.removeEventListener('keydown', onArrowBtnPress);
  ligthBox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
}
 
function onCloseLightboxOverlayClick(event) {
 
  if (event.currentTarget === event.target) {
    onCloseLigthBoxClick();
  }
}

function onKeyEscPress(event) {
  const isEscKey = event.code === 'Escape';
  if (isEscKey) {
    onCloseLigthBoxClick();
}
}

function onArrowBtnPress(event) {
  if (event.code === 'ArrowRight') {    
    if (indexlightboxImage === arrCdn.length-1) {
       indexlightboxImage = -1 ;
    }
    indexlightboxImage += 1;
    lightboxImage.src = arrCdn[indexlightboxImage].original;

  } else if (event.code === 'ArrowLeft') {
      
    if (indexlightboxImage === 0) {
      indexlightboxImage = arrCdn.length;
    }
    indexlightboxImage-=1;
    lightboxImage.src = arrCdn[indexlightboxImage].original;
 
  }
}