import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-functions';
import fetchPhotos from './js/pixabai-api';


const imgContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
const fetchPhotosButton = document.querySelector('.photo-btn');

let page = 1;
const limit = 15;
let currentSearchQuery = ''; // Зберігаємо поточний пошуковий запит

function showLoadMoreButton() {
  fetchPhotosButton.classList.remove('is-hidden-btn');
}

async function fetchAndDisplayPhotos(searchQuery, pageNumber) {
  loaderEl.classList.remove('is-hidden');
  try {
    const imagesData = await fetchPhotos(searchQuery, pageNumber);
    if (imagesData.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no more images to load.',
      });
    } else {
      imgContainer.innerHTML += createMarkup(imagesData.hits);
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
      lightbox.refresh();
    }
  } catch (error) {
    console.log(error);
  } finally {
    loaderEl.classList.add('is-hidden');
  }
}

async function onLoadMore() {
  page++;
  await fetchAndDisplayPhotos(currentSearchQuery, page);
}

fetchPhotosButton.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  imgContainer.innerHTML = '';
  if (searchQuery === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  currentSearchQuery = searchQuery; // Оновлюємо поточний пошуковий запит
  loaderEl.classList.remove('is-hidden');

  try {
    page = 1; // Скидаємо номер сторінки при новому пошуку
    await fetchAndDisplayPhotos(searchQuery, page);
    showLoadMoreButton(); // Показуємо кнопку "Завантажити більше" лише після завантаження першої сторінки фотографій
  } catch (error) {
    console.log(error);
  } finally {
    event.target.reset();
    loaderEl.classList.add('is-hidden');
  }
}

searchForm.addEventListener('submit', onSearch);