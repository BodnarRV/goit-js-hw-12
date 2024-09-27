import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import { searchImages, loadMoreImages } from "./js/pixabay-api";
import { generateGalleryMarkup } from "./js/render-functions";

const searchForm = document.querySelector('#search-form');
const searchInput = searchForm.querySelector('input[type=search]');
const searchBtn = document.querySelector('button[type=submit]');
const galleryList = document.querySelector('.gallery__list');
const loadMoreButton = document.querySelector('.gallery button');

let lightbox;
let page = 1;
let totalHits = 0;
let loadedHits = 0;
let query = '';

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  query = searchInput.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Fill search input!',
      position: 'topRight'
    });
    return;
  }

  galleryList.innerHTML = '';
  page = 1;
  loadedHits = 0;
  loadMoreButton.style.display = 'none';
  
  searchImages(query, page, (images, total) => {
    totalHits = total;
    loadedHits += images.length;

    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message: 'No images found.',
        position: 'topRight',
      });
      loadMoreButton.style.display = 'none';
      return;
    }

    const markup = generateGalleryMarkup(images);
    galleryList.innerHTML = markup;

    if (lightbox) {
      lightbox.refresh();
    } else {
      lightbox = new SimpleLightbox('.gallery__list a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    }

    searchInput.value = '';

    if (loadedHits < totalHits) {
      loadMoreButton.style.display = 'block';
    } else {
      loadMoreButton.style.display = 'none';
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  });
});

loadMoreButton.addEventListener("click", event => {
  event.preventDefault();
  page += 1;

  loadMoreImages(query, page, (images, total) => { 
    loadedHits += images.length;
    const markup = generateGalleryMarkup(images);
    galleryList.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
    smoothScrollToNewImages()

    if (loadedHits >= totalHits) {
      loadMoreButton.style.display = 'none';
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  });
});

function smoothScrollToNewImages() {
  const { height: cardHeight } = galleryList.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}