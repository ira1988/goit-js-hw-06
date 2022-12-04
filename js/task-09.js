function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  text: document.querySelector(".color"),
};

ref.button.addEventListener("click", changeColorOnClick);

function changeColorOnClick(event) {
  const newColor = getRandomHexColor();
  ref.body.style.backgroundColor = `${newColor}`;
  ref.text.textContent = `${newColor}`;
}
