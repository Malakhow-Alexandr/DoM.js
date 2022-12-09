// события mouseenter и mouseleave происходят как ховер,

// события mouseover и mouseout происходят когда непосредственно наводишь на єлемент.

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseover", onMouseEnter);
boxRef.addEventListener("mouseleave", onMouseLeave);
boxRef.addEventListener("mouseout", onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove("box--active");
}

// function onMouseMove(event) {
//   console.log(event);
// }
