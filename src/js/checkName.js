const name = document.querySelector(".name");

// check name
function checkName() {
	let validationName = {
		status: "",
		f
	};
  if (name.value.length === 0) {
    name.classList.add("error");
    setTimeout(function () {
      name.classList.remove("error");
    }, 700);
		validationName
  } else {
    name.classList.add("success");
  }

}

export default checkName;