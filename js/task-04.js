const ref = {
  counterValue: document.querySelector("#value"),
  btnIncrementRef: document.querySelector('[data-action="increment"]'),
  btnDecrementtRef: document.querySelector('[data-action="decrement"]'),
};

ref.btnIncrementRef.addEventListener("click", increaseValue);
ref.btnDecrementtRef.addEventListener("click", decreaseValue);
let counter = 0;
function increaseValue() {
  counter += 1;
  ref.counterValue.textContent = `${counter}`;
}

function decreaseValue() {
  counter -= 1;
  ref.counterValue.textContent = `${counter}`;
}
