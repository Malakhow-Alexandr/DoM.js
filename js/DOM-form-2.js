const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-btn > span"),
  lisenceCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-btn"),
};

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("change", onInputChange);
// refs.input.addEventListener("input", onInputChange);

// function onInputFocus() {
//   console.log("Input get Focus = Focus");
// }

// function onInputBlur() {
//   console.log("Input lost focus = blur");
// }

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
// }

// function onLicenseChange(event) {
//   console.log(event.currentTarget.value);
// }

refs.input.addEventListener("input", onInputChange);
refs.lisenceCheckbox.addEventListener("change", onLicenseChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}
