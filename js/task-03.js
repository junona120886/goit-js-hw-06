const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector(".gallery");

listRef.style.listStyle = "none";

/*const makeTagString = (obj) => {
  const string = `<li><img src = '${obj.url}' alt = '${obj.alt}'></li>`;
  return string;
};

const tegString = images.map(makeTagString).join("");
listRef.insertAdjacentHTML("afterbegin", `${tegString}`);

const itemRef = listRef.querySelectorAll("li");
itemRef.forEach((item) => item.classList.add("gallery_item"));*/

const makeTagString = (obj) => {
  const string = `<li  class = 'gallery_item'><img src = '${obj.url}' alt = '${obj.alt}'></li>`;
  return string;
};

const tegString = images.map(makeTagString).join("");
listRef.insertAdjacentHTML("afterbegin", tegString);
