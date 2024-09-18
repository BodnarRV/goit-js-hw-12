import { startLoader, stopLoader } from "./render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const apiKey = '46012526-8744745123a0ad884cf175c85';
const baseUrl = 'https://pixabay.com/api/';

export function searchImages(query, callback) {
  const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  startLoader();

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again',
          position: 'topRight'
        });
      } else {
        const limitedImages = data.hits.slice(0, 9);
        callback(limitedImages);
      }
    })

    .catch(error => {
      console.log(error);
    })
    
    .finally(() => {
      stopLoader();
    });
}
