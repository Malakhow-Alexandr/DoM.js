const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log("This is value ", value);
    console.log("This is name ", name);
  });
}
