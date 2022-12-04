const ref = {
  form: document.querySelector(".login-form"),
  btnLogin: document.querySelector("button "),
};

ref.form.addEventListener("submit", onSubmit);
ref.form.addEventListener("submit", reset);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  const userEmail = email.value;
  const userPassword = password.value;

  if (email.value === "" || password.value === "") {
    return alert` Please,fill up all information before login `;
  }
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log(name, value);
  });

  const formData2 = {
    userEmail,
    userPassword,
  };
  console.log(formData2);
}

function reset(event) {
  const {
    elements: { email, password },
  } = event.currentTarget;

  email.value = "";
  password.value = "";
}
