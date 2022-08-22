const input = document.querySelector('#validation-input');

const requiredLength = input.dataset.length;

input.addEventListener('blur', (event) => {
  let checker = event.currentTarget.value.trim();
  event.currentTarget.value = checker;

  if (event.currentTarget.value.length == 6) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
