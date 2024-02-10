import IMask from 'imask';

// Считываем поле ввода
let phoneInput = document.querySelector(".phone");
// Считываем кнопку
let btn = document.querySelector(".form-button");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{375} (00)000-00-00",
});

// Обработчик события для инпута
// phoneInput.addEventListener("input", checkPhone);
// Обработчик события для кнопки
// btn.addEventListener("click", btnHandler);

// Если ввели правильно - кнопка активна
function checkPhone() {
  if (phoneMask.masked.isComplete) {
    phoneInput.classList.add("success");
  } else {
    phoneInput.classList.remove("success");
		phoneInput.classList.add("error");
		setTimeout(function () {
      phoneInput.classList.remove("error");
    }, 700);
  }
}

// Отправляем номер телефона
// async function btnHandler(e) {
//   e.preventDefault();
//   return await fetch("send_msg.php", {
//     method: "POST",
//     body: phoneMask.unmaskedValue,
//   });
// }

export default checkPhone;