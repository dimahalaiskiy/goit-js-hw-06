const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngridients = document.querySelector('ul');


ingredients.forEach((ingridient) => {
  const ingridientItem = document.createElement('li');
  ingridientItem.className = "item";
  ingridientItem.textContent = ingridient;
  allIngridients.append(ingridientItem);
})
