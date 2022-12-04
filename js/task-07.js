const ref = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

ref.input.addEventListener("change", onChangeincreaseFontsize);

function onChangeincreaseFontsize(event) {
  console.log(event.currentTarget.value);
  const newValue = Number(event.currentTarget.value);

  ref.text.style.fontSize = ` ${newValue}px `;
}
