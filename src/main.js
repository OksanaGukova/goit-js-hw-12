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

let currentPage = 1;
const limitPerPage = 15;

async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  imgContainer.innerHTML = '';

  try {
    if (searchQuery === '') {
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    loaderEl.classList.remove('is-hidden');
    const imagesData = await fetchPhotos(
      searchQuery,
      currentPage,
      limitPerPage
    );

    if (imagesData.hits.length === 0) {
      fetchPhotosButton.style.display = 'none';
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    renderImages(imagesData.hits);
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionsDelay: 250,
    });
    lightbox.refresh();
    fetchPhotosButton.style.display = 'flex';
    const totalPages = Math.ceil(100 / limitPerPage);

    fetchPhotosButton.addEventListener('click', async () => {
      try {
        if (currentPage > totalPages) {
          return iziToast.error({
            position: 'topRight',
            message: "We're sorry, there are no more photos to load",
          });
        }

        const photos = await fetchImages(
          searchQuery,
          currentPage + 1,
          limitPerPage
        );
        renderImages(photos);

        currentPage += 1;
        if (currentPage > 1) {
          fetchPhotosButton.textContent = 'No more photos';
          const imagesData = await fetchImages(
            searchQuery,
            currentPage,
            limitPerPage
          );
          renderImages(imagesData.hits);
        }
      } catch (error) {
        console.log(error);
      } finally {
        loaderEl.classList.add('is-hidden');
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    event.target.reset();
    loaderEl.classList.add('is-hidden');
  }
}

function renderImages(images) {
  imgContainer.innerHTML = createMarkup(images);
}

searchForm.addEventListener('submit', onSearch);