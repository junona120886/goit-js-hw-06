const getList = document.querySelector("#categories");
const getCategoryItems = getList.querySelectorAll(".item");

const countCategories = (list) => {
  console.log(`Number of categories: ${list.children.length}`);
};

const countCategoryItems = (value) => {
  console.log(`Elements: ${value.querySelectorAll("li").length}`);
};

const getCategories = (value) => {
  console.log(`Category: ${value.querySelector("h2").textContent}`);
};

const showCategories = (array) => {
  array.forEach((element) => {
    getCategories(element);
    countCategoryItems(element);
  });
};

countCategories(getList);
showCategories(getCategoryItems);
