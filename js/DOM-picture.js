const magicBtn = document.querySelector(".js-pic-mag-btn");

magicBtn.addEventListener("click", () => {
  const heroTItleEl = document.querySelector(".hero-title");
  heroTItleEl.textContent = "New foto of little Vasil";
  const imageEl = document.querySelector(".hero-img");

  imageEl.src = "http://127.0.0.1:5500/picture/IMG_20191201_000836.jpg";
  imageEl.alt = "this is new cat";
});

const actions = document.querySelectorAll(".js-actions button");
console.log(actions[0].dataset.action);
