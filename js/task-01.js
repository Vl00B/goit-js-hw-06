const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

for (let i = 0; i < categories.length; i += 1) {
  const category = categories[i].firstElementChild;
  console.log('Category: ', category.textContent);
  const elements = categories[i].lastElementChild.childElementCount;
  console.log('Elements: ', elements);
}
