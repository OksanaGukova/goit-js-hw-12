import axios from 'axios';
export const perPage = 15;
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43705346-f08330685c72fc18a8a8b3aad';

 const fetchPhotos = async (searchImage, page) => {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchImage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage,
      }
    })
    return response.data;
};

export default fetchPhotos;