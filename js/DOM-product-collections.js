import products from "./data/products-collection.js";

// const product = {
//   name: "Rtx 2060super",
//   description: "Best budget video card in 2020",
//   price: 400,
//   available: true,
//   onSale: true,
// };

// const productEl = document.createElement("article");
// productEl.classList.add("product");

// const productNameEl = document.createElement("h2");
// productNameEl.classList.add("product__name");
// productNameEl.textContent = product.name;

// const productDescEl = document.createElement("p");
// productDescEl.classList.add("product__descr");
// productDescEl.textContent = product.description;

// const productPriceEl = document.createElement("p");
// productPriceEl.classList.add("product__price");
// productPriceEl.textContent = `Price: ${product.price}$`;

// productEl.append(productNameEl, productDescEl, productPriceEl);

// Функция для создания карточки продукта

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const productNameEl = document.createElement("h2");
  productNameEl.classList.add("product__name");
  productNameEl.textContent = name;

  const productDescEl = document.createElement("p");
  productDescEl.classList.add("product__descr");
  productDescEl.textContent = description;

  const productPriceEl = document.createElement("p");
  productPriceEl.classList.add("product__price");
  productPriceEl.textContent = `Price: ${price}$`;

  productEl.append(productNameEl, productDescEl, productPriceEl);

  return productEl;
};

const elements = products.map(makeProductCard);

const productContainerEl = document.querySelector(".js-products");

productContainerEl.append(...elements);
