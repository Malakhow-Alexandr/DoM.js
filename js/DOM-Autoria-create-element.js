import cars from "./data/cars-data.js";

console.log(cars);

const container = document.querySelector(".js-Autoria-container");

function makeCarsMurkup({ model, brand, img, price, description }) {
  const fullCardElement = document.createElement("li");

  const carBrand = document.createElement("h2");
  carBrand.textContent = brand;

  const carModel = document.createElement("h3");
  carModel.textContent = model;

  const carPrice = document.createElement("p");
  carPrice.textContent = `This car cost ${price}$`;

  const carDisc = document.createElement("p");
  carDisc.textContent = description;

  const carPic = document.createElement("img");

  carPic.src = img;
  carPic.alt = `This is ${brand} ${model}`;
  carPic.width = 320;

  fullCardElement.append(carPic, carBrand, carModel, carPrice, carDisc);

  return fullCardElement;
}

const element = cars.map(makeCarsMurkup);

console.log(element);

container.append(...element);
