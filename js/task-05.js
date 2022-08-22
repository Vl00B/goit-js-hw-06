const output = document.querySelector('#name-output');

const textInput = document.querySelector('#name-input');

textInput.addEventListener('input', (event) => {
  output.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value == '') {
    output.textContent = 'Anonymous';
  }
});
