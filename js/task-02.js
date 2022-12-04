const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const ingredientsList = ingredients.map((ingredient) => {
  let item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  return item;
});
function addingredIentToList() {
  list.append(...ingredientsList);
}

addingredIentToList();
