import IMask from 'imask';

// Считываем поле ввода
let phoneInput = document.querySelector(".phone");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{375} (00) 000-00-00",
});