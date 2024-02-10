const email = document.querySelector(".email");

// check email
function checkEmail() {
  const EMAIL_REGEXP =/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	if(EMAIL_REGEXP.test(email.value)) {
		email.classList.add("success");
	} else {
		email.classList.add("error");
    setTimeout(function () {
      email.classList.remove("error");
    }, 700);
	}
}

export default checkEmail;