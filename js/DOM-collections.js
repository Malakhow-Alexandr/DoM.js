const colorPickerOptions = [
  {
    lable: "red",
    color: "#F44336",
  },
  {
    lable: "green",
    color: "#4CAF50",
  },
  {
    lable: "blue",
    color: "#2196F3",
  },
  {
    lable: "grey",
    color: "#607D8B",
  },
  {
    lable: "pink",
    color: "#E91E63",
  },
  {
    lable: "indigo",
    color: "#3F51B5",
  },
];

// Создание Массива кнопок старым способом

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];

//   const buttonEl = document.createElement("button");

//   buttonEl.type = "button";
//   buttonEl.textContent = option.lable;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.classList.add("buttons-item");

//   elements.push(buttonEl);
// }

// console.log(elements);

// const colorPickerContainerElement = document.querySelector(".js-color-picker");

// colorPickerContainerElement.append(...elements);

// Создание массива кнопок Новым способом

// const elements = colorPickerOptions.map(({ lable, color }) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = lable;
//   buttonEl.style.backgroundColor = color;
//   buttonEl.classList.add("buttons-item");

//   return buttonEl;
// });

// const colorPickerContainerElement = document.querySelector(".js-color-picker");

// colorPickerContainerElement.append(...elements);

// Функция для создания разметки Колорпикера

const magicBtn = document.querySelector(".magic-btn");

const makeColorPickerOptions = (options) => {
  return options.map(({ lable, color }) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.textContent = lable;
    buttonEl.style.backgroundColor = color;
    buttonEl.classList.add("buttons-item");

    return buttonEl;
  });
};
const elements = makeColorPickerOptions(colorPickerOptions);
const colorPickerContainerElement = document.querySelector(".js-color-picker");

magicBtn.addEventListener("click", () => {
  colorPickerContainerElement.append(...elements);
});
