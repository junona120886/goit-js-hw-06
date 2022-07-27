let counterValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
