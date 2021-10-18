const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredientsEl = document.querySelector('#ingredients');


const ingredientItem = ingredients.map((ingredient) => { 
  const ingredientItem = document.createElement('li');
  ingredientItem.className = "item";
  ingredientItem.textContent = ingredient;
  return ingredientItem;
})

allIngredientsEl.append(...ingredientItem);

