const modalButton = document.querySelector(".modal-button");
const overlay = document.querySelector(".overlay");
const modalWindow = document.querySelector(".modal-window");
const modalClose = document.querySelector(".modal-close");

modalButton.addEventListener("click", () => {
  overlay.classList.add("active");
  modalWindow.classList.add("active");
});

modalClose.addEventListener("click", () => {
  overlay.classList.remove("active");
  modalWindow.classList.remove("active");
});
