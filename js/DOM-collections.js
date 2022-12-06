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
// const option = colorPickerOptions[0];

// const buttonEl = document.createElement("button");
// buttonEl.type = "button";
// buttonEl.textContent = option.lable;
// buttonEl.style.backgroundColor = option.color;
// buttonEl.style.width = 100;
// buttonEl.style.height = 50;
// console.log(buttonEl);

// Создание Массива кнопок старым способом

const elements = [];

for (let i = 0; i < colorPickerOptions.length; i += 1) {
  const option = colorPickerOptions[i];

  const buttonEl = document.createElement("button");

  buttonEl.type = "button";
  buttonEl.textContent = option.lable;
  buttonEl.style.backgroundColor = option.color;

  elements.push(buttonEl);
}

console.log(elements);

const colorPickerContainerElement = document.querySelector(".js-color-picker");

colorPickerContainerElement.append(...elements);
