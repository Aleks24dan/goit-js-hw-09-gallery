export default
function creatGalleryMarkup(arrCdn) {
  return arrCdn.map(({ preview, original, description },i) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-number="${i}"
      alt="${description}"
    />
  </a>
</li>`}).join('');
}