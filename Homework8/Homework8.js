const items = [
  "Apples",
  "Bananas",
  "Carrots",
  "Donuts",
  "Eggs",
  "Fish",
  "Grapes",
  "Honey"
];

const itemList = document.getElementById("itemList");
const searchInput = document.getElementById("searchInput");

function displayItems() {
  itemList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
}

function filterItems() {
  const searchValue = searchInput.value.toLowerCase();
  const allItems = itemList.querySelectorAll("li");

  allItems.forEach((li) => {
    const itemText = li.textContent.toLowerCase();
    if (itemText.includes(searchValue)) {
      li.classList.remove("hidden");
    } else {
      li.classList.add("hidden");
    }
  });
}

searchInput.addEventListener("input", filterItems);

displayItems();
