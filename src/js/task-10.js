function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input')
const btnCreateEl = document.querySelector('button[data-create]')
const btnDestroyEl = document.querySelector('button[data-destroy]')
const boxesEl = document.querySelector('#boxes');


function createBoxes(amount) {
  let a = []
  let width = 0;
  let heigth = 0;
  for (let i = 0; i < amount; i++) {
    width += 10;
    heigth += 10;
    const newDivs = document.createElement('div')
    newDivs.classList.add('new-div')
    newDivs.style.width = `${width + 20}px`
    newDivs.style.height = `${heigth + 20}px`
    newDivs.style.backgroundColor = getRandomHexColor();
    a.push(newDivs)
  }
  boxesEl.append(...a)
}

let count = 0;

const currentAmount = (event) => {
  count = event.currentTarget.value;
  return count;
}

inputEl.addEventListener('input', currentAmount);

btnCreateEl.addEventListener('click', () => {
  createBoxes(count)
});

btnDestroyEl.addEventListener('click', () => {
    const delDiv = document.querySelectorAll('.new-div');
    delDiv.forEach((div) => {
      div.remove()
    })
})