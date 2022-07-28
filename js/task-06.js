const inputRef = document.querySelector("#validation-input");
const validLength = inputRef.getAttribute("data-length");

const onBlurValidation = () => {
  if (Number(inputRef.value.length) === Number(validLength)) {
    inputRef.className = "valid";
  } else {
    inputRef.className = "invalid";
  }
};
inputRef.addEventListener("blur", onBlurValidation);
