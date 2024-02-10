const message = document.querySelector(".message");

//check message 
function checkMessage() {
  if (message.value.length === 0) {
    message.classList.add("error");
    setTimeout(function () {
      message.classList.remove("error");
    }, 700);
  } else {
    message.classList.add("success");
  }
}

export default checkMessage;