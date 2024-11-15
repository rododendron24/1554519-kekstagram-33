const randomUsersPictures = document.querySelector('.pictures');
const randomUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (({url, description, likes, comments}) => {
  const pictureElement = randomUserPictureTemplate.cloneNode(true);

  // Добавить изображение
  //const pictureElement = document.querySelector('picture__img');
  //pictureElement.src = url;
  //pictureElement.alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  //PartOfPicture.querySelector('.picture__comments').textContent = comments.length;
// Блок с количеством лайков

  //PartOfPicture.querySelector('.picture__img').src = url;
  //PartOfPicture.querySelector('.picture__img').alt = description;
  //PartOfPicture.querySelector('.picture__likes').textContent = likes;
  //PartOfPicture.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
});

const makePicturesShow = (pictures) => {
  const randomUsersPicturesFragment = document.createDocumentFragment();

  pictures.forEach((pictureElement) => {
    const createPictureElement = createPictures(pictureElement);
    randomUsersPicturesFragment.append(createPictureElement);
  });


  randomUsersPictures.append(randomUsersPicturesFragment);
};
export {makePicturesShow};

/*
const url = randomUsersPictures.querySelector('.picture__img');
picture.src = 'images/picture.jpg'
const makePicture = function (url, description, likes, comments) {
  const RandomPictures = randomUserPictureTemplate.cloneNode(true);
  return makePicture;
};


/*
<template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template>

   <section class="pictures  container">
      <h2 class="pictures__title  visually-hidden">Фотографии других пользователей</h2>
*/
