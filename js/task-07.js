const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const rangeHandler = () => {
  const fontSize = Number(rangeRef.value);

  textRef.setAttribute("style", `font-size: ${fontSize}px`);
  textRef.textContent = `Current font-size: ${fontSize}`;
};

rangeRef.addEventListener("input", rangeHandler);
