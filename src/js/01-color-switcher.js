const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let stopColor = null;

function disableButton(btn) {
  btn.disabled = true;
}

function enableButton(btn) {
  btn.disabled = undefined;
}

function changeBackroundColor(color = '#ffffff') {
  document.body.style.backgroundColor = color;
}

startButton.addEventListener('click', () => {
  disableButton(startButton);
  enableButton(stopButton);
  stopColor = setInterval(() => {
    changeBackroundColor(getRandomHexColor());
  }, 1000);
});

stopButton.addEventListener('click', () => {
  disableButton(stopButton);
  enableButton(startButton);
  clearInterval(stopColor);
  changeBackroundColor();
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
