const ref = {
  input: document.querySelector("#name-input"),
  greetingText: document.querySelector("#name-output"),
};

ref.input.addEventListener("input", onInputChangeGreetingText);

function onInputChangeGreetingText(event) {
  const inputValue = event.currentTarget.value;

  if (inputValue !== "") {
    ref.greetingText.textContent = `${inputValue}`;
  } else {
    ref.greetingText.textContent = "Anonymous";
  }
}
