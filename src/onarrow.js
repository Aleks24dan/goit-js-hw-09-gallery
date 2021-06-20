export let indexlightboxImage = 0;
export function onArrowBtnPress(event) {
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
