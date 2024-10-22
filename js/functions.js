function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Пример использования:
/* eslint-disable no-alert, no-console */
console.log(checkStringLength('Паровозик', 5)); // false
console.log(checkStringLength('Какие-то буквы', 14)); // true
/* eslint-enable no-alert */

function isPalindrome(str) {
  // Приведение строки к нижнему регистру и удаление всех не буквенно-цифровых символов
  const cleanedStr = str.toLowerCase().replace(/[^а-я0-9]/g, '');

  // Сравнение строки с её реверсированной версией
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Пример использования:
console.log(isPalindrome('А роза упала на лапу азорА')); // Палиндром
console.log(isPalindrome('А роза не упала')); // Не палиндром


function checkTextLength(str, minLength, maxLength) {
  if (str.length >= minLength && str.length <= maxLength) {
    return 'Строка имеет допустимую длину';
  } else if (str.length < minLength) {
    return 'Строка слишком короткая';
  } else {
    return 'Строка слишком длинная';
  }
}

// Пример использования:
const result = checkTextLength('Пример строки', 5, 20);
console.log(result);
