const inputFields = document.querySelectorAll(".input-field");
const errorFields = document.querySelectorAll(".error-field");

// check name
function cleanFields() {
  for (let item of inputFields) {
    item.value = "";
  }

  for (let item of errorFields) {
    item.innerHTML = "";
  }
}

export default cleanFields;
