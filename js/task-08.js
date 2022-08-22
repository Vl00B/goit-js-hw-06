const form = document.querySelector('form.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('ВСІ ПОЛЯ ПОВИННІ БУТИ ЗАПОВНЕНІ!');
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
}
