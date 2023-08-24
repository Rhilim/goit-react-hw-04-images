import axios from 'axios';

const API_KEY = '38147369-b2ddcbff8805f9127b2360eeb';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const defaultParams = {
  key: API_KEY,
  imageType: 'photo',
  per_page: 12,
  orientation: 'horizontal',
};

export async function getImages({ query, page }) {
  const params = {
    ...defaultParams,
    q: query,
    page: page,
  };
  const response = await axios.get('', { params });
  return response.data;
};


// async function getImages({ query, page }) {
//   const params = {
//     ...defaultParams,
//     q: query,
//     page: page,
//   };

//   const response = await axios.get('', { params });

//   return response.data;
// }