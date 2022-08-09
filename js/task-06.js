const inputRef = document.querySelector("#validation-input");
const validLength = inputRef.getAttribute("data-length");

const onBlurValidation = () => {
  if (Number(inputRef.value.length) === Number(validLength)) {
    inputRef.classList.add("valid");
    if (inputRef.classList.contains("invalid")) {
      inputRef.classList.remove("invalid");
    }
  } else {
    inputRef.classList.add("invalid");
    if (inputRef.classList.contains("valid")) {
      inputRef.classList.remove("valid");
    }
  }
};
inputRef.addEventListener("blur", onBlurValidation);
