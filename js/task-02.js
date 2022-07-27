const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const refList = document.querySelector("#ingredients");
refList.style.listStyle = "none";

const createList = ingredients.map((value) => {
  const item = document.createElement("li");
  item.textContent = value;
  item.className = "item";

  return item;
});

refList.append(...createList);
