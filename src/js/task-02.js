const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients');


ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.className = "item";
  ingredientItem.textContent = ingredient;
  allIngredients.append(ingredientItem);
})
