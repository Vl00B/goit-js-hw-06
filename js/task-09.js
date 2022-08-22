function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');

const switcher = document.querySelector('button.change-color');

const indicator = document.querySelector('.color');

switcher.addEventListener('click', colorToChange);

function colorToChange(event) {
  let newColor = getRandomHexColor();
  newColor = hexToRgbNew(newColor);
  body.style.backgroundColor = `rgb(${newColor})`;
  indicator.textContent = `rgb(${newColor})`;
}

function hexToRgbNew(hex) {
  var arrBuff = new ArrayBuffer(4);
  var vw = new DataView(arrBuff);
  vw.setUint32(0, parseInt(hex, 16), false);
  var arrByte = new Uint8Array(arrBuff);

  return arrByte[1] + ',' + arrByte[2] + ',' + arrByte[3];
}
