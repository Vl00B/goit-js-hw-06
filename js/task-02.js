const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const contextElement = document.querySelector('#ingredients');

const arrayOfElements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement('li');
  item.textContent = ingredients[i];
  item.classList.add('item');
  arrayOfElements.push(item);
}

for (let i = 0; i < ingredients.length; i += 1) {
  contextElement.append(arrayOfElements[i]);
}
