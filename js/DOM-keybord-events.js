// keydown keyup: хранят в себе нажатия на все клавиши + служебные

// keypress хранит клавиши с символами

// event.key хранит символ клавиши

// event.code хранит код расположения клавиши.

const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};

window.addEventListener("keydown", onKeypress);
refs.clearBtn.addEventListener("click", onClearOutput);

function onKeypress(event) {
  //   console.log("event.key ", event.key);
  //   console.log("event.code ", event.code);
  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = "";
}
