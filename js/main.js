const names = [
  'Александр',
  'Анна',
  'Сергей',
  'Елена',
  'Дмитрий',
  'Ольга',
  'Максим',
  'Татьяна',
  'Андрей',
  'Марина',
  'Иван',
  'Ксения',
  'Алексей',
  'Наталья',
  'Михаил',
  'Светлана',
  'Никита',
  'Юлия',
  'Владимир',
  'Ирина',
  'Павел',
  'Екатерина',
  'Артем',
  'Виктория',
  'Софья'
];


const description = [
  'Здесь я наслаждаюсь закатом на берегу моря.',
  'Этот день был полон ярких моментов и смеха.',
  'Люблю гулять по осеннему парку, когда листья шуршат под ногами.',
  'Встреча с друзьями – всегда радость!',
  'Первый снег этого года принес много радости.',
  'Этот город никогда не перестает меня удивлять своей красотой.',
  'Прогулка по городу вечером – одно удовольствие.',
  'Любимый кофе и книга – идеальный вечер.',
  'Это место напоминает мне о детстве.',
  'Встречал рассвет на вершине горы – незабываемые впечатления!',
  'Наше путешествие было полным приключений и открытий.',
  'Эта фотография символизирует начало нового этапа в моей жизни.',
  'Люблю проводить время на природе, вдали от городской суеты.',
  'Иногда нужно просто остановиться и насладиться моментом.',
  'Городской пейзаж ночью – особая магия.',
  'В этом месте я чувствую себя счастливым.',
  'Моя любимая улица в родном городе.',
  'Радость встречи с близкими людьми.',
  'Каждый закат неповторим и прекрасен.',
  'Прогулка по набережной – мой любимый способ расслабиться.',
  'Это место хранит много воспоминаний.',
  'Мой уголок спокойствия и уединения.',
  'На этой фотографии запечатлено мгновение счастья.',
  'Очень красиво.',
  'Путешествие по неизвестным местам – лучший способ узнать мир.'
];

const messages = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Отличный кадр!',
  'Как красиво получилось!',
  'Вау, просто супер!',
  'Классная фотография!',
  'Прекрасный момент!',
  'Потрясающий вид!',
  'Великолепно!',
  'Шикарный снимок!',
  'Очень атмосферно!',
  'Удивительно!',
  'Здорово выглядит!',
  'Настоящее искусство!',
  'Красота!',
  'Впечатляет!',
  'Ярко и живо!',
  'Просто космос!',
  'Очаровательно!',
  'Так держать!',
  'Браво!',
  'Магия в каждом кадре!',
  'Пленяет взгляд!',
  'Волшебство!',
  'Необыкновенно!',
];

const photosData = 25;

// Функция для генерации случайных чисел в заданном диапазоне
const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// eslint-disable-next-line no-unused-vars
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

// Массив с возможными аватарами
const avatars = ['photos/1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg'];


// Функция для генерации случайного имени
const getRandomName = () => names[getRandomInt(0, names.length - 1)];

// Функция для генерации случайной аватарки
// eslint-disable-next-line no-unused-vars
const getRandomAvatar = () => avatars[getRandomInt(0, avatars.length - 1)];

// Функция для генерации случайного описания
const getRandomDescription = () => description[getRandomInt(0, description.length - 1)];

// Функция для генерации комментария
const getRandomMessage = () => messages[getRandomInt(0, messages.length - 1)];

// Функция для генерации фотографии
//const getRandomImage = () => messages[getRandomInt(0, photos/{{i}}.jpg)];

const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

const createId = createIdGenerator();

// Функция для генерации случайного комментария
// eslint-disable-next-line no-unused-vars
const generateComment = () => ({
  id: createId(1, 25),
  avatar: `img/avatar-${getRandomInt(1, 6).toString()}.svg`,
  message: getRandomMessage(1, 25),
  name: getRandomName(1, 25)
});

// Функция для генерации описания фотографии
const generatePhotoDescription = () => ({
  id: createId(1, 25),
  url: `photos/${getRandomInt(1, 6).toString()}.jpg`,
  description: getRandomDescription (),
  likes: getRandomInt(15, 200),
  comments: getRandomMessage(1, 25)
});

// Генерация массива из 25 объектов
const photos = Array.from({ length: photosData }, (_, index) => generatePhotoDescription(index + 1));

console.log(photos);
/*
const photosData = 25;

// Функция для генерации случайных чисел в заданном диапазоне
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Массив с возможными аватарами
const avatars = ['img/avatar-1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg'];


// Функция для генерации случайного имени
const getRandomName = () => names[getRandomInt(0, names.length - 1)];

// Функция для генерации случайной аватарки
const getRandomAvatar = () => avatars[getRandomInt(0, avatars.length - 1)];

// Функция для генерации случайного описания
const getRandomDescription = () => description[getRandomInt(0, description.length - 1)];

// Функция для генерации комментария
const getRandomMessage = () => messages[getRandomInt(0, messages.length - 1)];


// Функция для генерации случайного комментария
// eslint-disable-next-line no-unused-vars
const generateComment = () => ({
  id: getRandomInt(1, 25),
  avatar: getRandomAvatar(),
  message: getRandomMessage(),
  name: getRandomName()
});

// Функция для генерации описания фотографии
const generatePhotoDescription = (id) => ({
  id: getRandomInt(1, 25),
  url: `photos/${id}.jpg`,
  description: getRandomDescription (),
  likes: getRandomInt(15, 200),
  comments: getRandomMessage(1, 25)
});

// Генерация массива из 25 объектов
const photos = Array.from({ length: photosData }, (_, index) => generatePhotoDescription(index + 1));

console.log(photos);
*/

/*
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhotoData = () => (
  return {
    id: '',
    url: '',
    description: getRandomArrayElement(photoDescription),
    likes: '',
    comments: getRandomArrayElement(photoComments),
  });

  console.log(
    createWizard()
);




const allPhotoData = Array.from({length: photosData}, createPhotoData);


console.log(allPhotoData);
*/
