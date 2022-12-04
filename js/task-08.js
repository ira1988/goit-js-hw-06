const ref = {
  form: document.querySelector(".login-form"),
  btnLogin: document.querySelector("button "),
};

ref.form.addEventListener("submit", onSubmit);

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
  formData.forEach((value, name) => {
    console.log(name, value);
  });

  const formData2 = {
    userEmail,
    userPassword,
  };

  // console.log(userEmail)
  // console.log(userPassword)

  console.log(formData);
  console.log(formData2);
}
