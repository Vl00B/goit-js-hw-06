let counterValue = 0;

const counterElement = document.querySelector('#value');

const buttonToDecrease = document.querySelector('[data-action="decrement"]');

const buttonToIncrease = document.querySelector('[data-action="increment"]');

const decrement = () => {
  counterValue -= 1;
  counterElement.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  counterElement.textContent = counterValue;
};

buttonToDecrease.addEventListener('click', decrement);
buttonToIncrease.addEventListener('click', increment);
