// Number of Categories
const numOfCategories = document.querySelectorAll('.item').length;

console.log(`Number of categories:`, numOfCategories);

// Categories
const categoryHeadings = document.querySelectorAll('h2');

categoryHeadings.forEach((el) => console.log(`Category:`, el.textContent));

// Number of Elements
const numOfElements = document.querySelectorAll('li > ul');

numOfElements.forEach((el) => console.log(`Elements:`, el.children.length));

