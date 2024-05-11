import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-functions';
import fetchPhotos from './js/pixabai-api';

const imgContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
const fetchPhotosBtn = document.querySelector('.photo-btn');

let page = 1;
let limit = 15;
const totalPages = Math.ceil(100 / limit);


fetchPhotosBtn.addEventListener('click', async () => {
  try {
    if (page > totalPages) {
      return iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more photos to load",
      });
    }

    const searchQuery = searchForm.elements.searchKeyword.value.trim();
    const photos = await fetchPhotos(searchQuery, page);
    createMarkup(photos);

    page += 1;
    if (page > totalPages) {
      fetchPhotosBtn.textContent = 'No more photos';
    }
  } catch (error) {
    console.log(error);
  }
});


function onSearch(event) {
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

  fetchPhotos(searchQuery)
    .then(imagesData => {
      if (imagesData.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      imgContainer.innerHTML = createMarkup(imagesData.hits);
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchForm.addEventListener('submit', onSearch);


