import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-functions';
import fetchImages from './js/pixabai-api';


const imageGalleryContainer = document.querySelector('.gallery');
const searchInputForm = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');
const fetchPhotosButton = document.querySelector('.photo-btn');

let page = 1;
const limit = 15;

async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  imageGalleryContainer.innerHTML = '';

  try {
    if (searchQuery === '') {
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    loaderElement.classList.remove('is-hidden');
    const imagesData = await fetchImages(searchQuery, page, limit);

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
    const totalPages = Math.ceil(100 / limit);

    fetchPhotosButton.addEventListener('click', async () => {
      try {
        if (page > totalPages) {
          return iziToast.error({
            position: 'topRight',
            message: "We're sorry, there are no more photos to load",
          });
        }

        const photos = await fetchImages(
          searchQuery,
          page + 1,
          limit
        );
        renderImages(photos);

        page += 1;
        if (page > 1) {
          fetchPhotosButton.textContent = 'get more photos';
          const imagesData = await fetchImages(searchQuery, page, limit);
          renderImages(imagesData.hits);
        }
      } catch (error) {
        console.log(error);
      } finally {
        loaderElement.classList.add('is-hidden');
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    event.target.reset();
    loaderElement.classList.add('is-hidden');
  }
}

function renderImages(images) {
  imageGalleryContainer.innerHTML = createMarkup(images);
}

searchInputForm.addEventListener('submit', onSearch);