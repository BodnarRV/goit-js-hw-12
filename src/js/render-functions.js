export function generateGalleryMarkup(images) {
  return images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="info">
            <div class="info__item">
              <p class="title">Likes</p>
              <p class="value">${likes}</p>
            </div>
            <div class="info__item">
              <p class="title">Views</p>
              <p class="value">${views}</p>
            </div>
            <div class="info__item">
              <p class="title">Comments</p>
              <p class="value">${comments}</p>
            </div>
            <div class="info__item">
              <p class="title">Downloads</p>
              <p class="value">${downloads}</p>
            </div>
          </div>
        </li>
      `
    ).join("");
}

export function startLoader() {
  const loaderContainer = document.querySelector('.loader__container');
  loaderContainer.classList.add('active');
}

export function stopLoader() {
  const loaderContainer = document.querySelector('.loader__container');
  loaderContainer.classList.remove('active');
}
