import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43705346-f08330685c72fc18a8a8b3aad';

export const fetchPhotos = async (searchImage, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchImage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
