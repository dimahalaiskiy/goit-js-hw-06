// Number of Categories
const liItemsEl = document.querySelectorAll('.item').length;
const itemsEl = document.querySelectorAll('ul > li > ul');

console.log(`Number of categories:`, liItemsEl);
console.log('');


itemsEl.forEach((el) => {
    const liItemHeading = document.querySelector('h2')
    console.log(`Category:`, liItemHeading.textContent)
    console.log(`Elements:`, el.children.length)
    console.log('');
});

