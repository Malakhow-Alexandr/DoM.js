const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListnerBtn = document.querySelector(".js-remove-listener-btn");

addListenerBtn.addEventListener("click", (event) => {
  console.log(event);
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListnerBtn.addEventListener("click", (event) => {
  console.log(event);
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log("Клик по целевой кнопке.");
}
