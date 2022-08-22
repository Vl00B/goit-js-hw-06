function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.querySelector('#boxes');

const cleaner = document.querySelector('[data-destroy]');

const initiator = document.querySelector('[data-create]');

const counter = document.querySelector('#controls input');

const minSize = '30px';

initiator.addEventListener('click', createDivs);
cleaner.addEventListener('click', () => {
  container.innerHTML = '';
});

function createDivs(event) {
  if (counter.value === '') {
    alert('Define amount of boxes!');
  }

  let size = minSize;

  for (let i = 0; i < counter.value; i += 1) {
    const box = document.createElement('div');
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    container.append(box);
    size = parseInt(size) + 10;
    size += 'px';
    console.log(size);
  }

  counter.value = '';
}
