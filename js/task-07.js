const text = document.querySelector('#text');

const slider = document.querySelector('#font-size-control');

text.style.fontSize = slider.value + 'px';

slider.addEventListener('input', (event) => {
  let range = event.currentTarget.value;
  text.style.fontSize = range + 'px';
});
