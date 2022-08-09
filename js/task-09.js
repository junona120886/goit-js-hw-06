function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/* Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
на button.change-color і виводить значення кольору в span.color.
*/

const colorSpanRef = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

const changeColorButtonHandler = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;

  colorSpanRef.textContent = `${color}`;
};

changeColorButton.addEventListener("click", changeColorButtonHandler);
