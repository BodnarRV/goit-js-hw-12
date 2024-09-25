import axios from 'axios';
import { startLoader, stopLoader } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const apiKey = '46012526-8744745123a0ad884cf175c85';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function searchImages(query, page, callback) {
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 15
  });

  startLoader();

  try {
    const response = await axios.get('', { params });
    const data = response.data;

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
      });
    } else {
      callback(data.hits, data.totalHits);
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    stopLoader();
  }
}

export async function loadMoreImages(query, page, callback) {
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 15
  });

  startLoader();

  try {
    const response = await axios.get('', { params });
    const data = response.data;

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
      });
      callback([], data.totalHits);
    } else {
      callback(data.hits, data.totalHits);
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    stopLoader();
  }
}
