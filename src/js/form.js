import checkName from "./checkName";
import checkPhone from "./phoneMask";
import checkEmail from "./checkEmail";
import checkMessage from "./checkMessage";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName();
	checkEmail();
	checkPhone();
	checkMessage();
});
