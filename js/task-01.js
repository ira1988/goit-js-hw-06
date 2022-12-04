const list = document.querySelector("#categories");

function countCategories() {
  const categorie = list.children;
  console.log(`Number of categories: ${categorie.length}`);
}

function showNameOfCategorie() {
  for (const item of list.children) {
    const categorieName = item.firstElementChild.textContent;
    const numberOfElements = item.lastElementChild.children.length;
    console.log(`Category: ${categorieName} Elements: ${numberOfElements} `);
  }
}

countCategories();
showNameOfCategorie();
