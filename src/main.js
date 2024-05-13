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

function showLoadMoreButton() {
  fetchPhotosButton.classList.remove('is-hidden-btn');
}

async function onLoadMore() {
  loaderEl.classList.remove('is-hidden');
  page++;
  const searchQuery = searchForm.elements.searchKeyword.value.trim();

  try {
    const imagesData = await fetchPhotos(searchQuery, page);
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
  imgContainer.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  try {
    const imagesData = await fetchPhotos(searchQuery);
    if (imagesData.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      imgContainer.innerHTML = createMarkup(imagesData.hits);
      showLoadMoreButton();
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
      lightbox.refresh();
    }
  } catch (error) {
    console.log(error);
  } finally {
    event.target.reset();
    loaderEl.classList.add('is-hidden');
  }
}

searchForm.addEventListener('submit', onSearch);