import "./phoneMask";
import cleanFields from "./cleanFields";

const form = document.querySelector(".form");

function isString(value) {
  return typeof value === "string";
}

function isEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function validationForm(option) {
  let validationResult = {
    status: "success",
    fields: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  };

  if (!isString(option.name) || option.name.length === 0) {
    validationResult.status = "error";
    validationResult.fields.name = "Введите имя";
  }

  if (!isString(option.email) || !isEmail(option.email)) {
    validationResult.status = "error";
    validationResult.fields.email = "Не правильно введен email";
  }

  if (!isString(option.phone) || option.phone.length === 0) {
    validationResult.status = "error";
    validationResult.fields.phone = "Введите телефон";
  }

  if (!isString(option.message) || option.message.length === 0) {
    validationResult.status = "error";
    validationResult.fields.message = "Введите сообщение";
  }

  return validationResult;
}

function errorMessageOutput(objectWithErrors) {
  for (let errorField in objectWithErrors) {
    if (objectWithErrors[errorField].length > 0) {
      const classNameInputField = `.${errorField}`;
      const classNameErrorMessageField = `.input-${errorField}-error`;
      const inputField = document.querySelector(classNameInputField);
      const errorMessageField = document.querySelector(
        classNameErrorMessageField
      );

      inputField.classList.add("error");
      setTimeout(function () {
        inputField.classList.remove("error");
      }, 700);
      errorMessageField.innerHTML = objectWithErrors[errorField];
    } else {
      const classNameErrorMessageField = `.input-${errorField}-error`;
      const errorMessageField = document.querySelector(
        classNameErrorMessageField
      );
      errorMessageField.innerHTML = "";
    }
  }
}

function sendForm(data) {
  let URL = "http://localhost:9090/api/registration";
  let option = { method: "POST", body: data };

  fetch(URL, option)
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      cleanFields();
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formField = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  let formValidationResult = validationForm(formField);

  if (formValidationResult.status === "error") {
    errorMessageOutput(formValidationResult.fields);
    return false;
  }

  sendForm(formField);
});
