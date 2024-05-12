import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43705346-f08330685c72fc18a8a8b3aad';

const fetchImages = async (searchImage, page) => {
 
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchImage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 15,
      },
    });
    return response.data;
};

export default fetchImages;
