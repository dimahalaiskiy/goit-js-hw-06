// Number of Categories
const numOfCategories = document.querySelectorAll('.item').length;

console.log(`Number of categories:`, numOfCategories);

// Categories
const categoryEl = document.querySelectorAll('h2');

categoryEl.forEach((el) => console.log(`Category:`, el.textContent));

// Number of Elements
const itemsEl = document.querySelectorAll('li > ul');

itemsEl.forEach((el) => console.log(`Elements:`, el.children.length));

