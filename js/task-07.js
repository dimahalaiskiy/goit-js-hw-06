const inputEl = document.querySelector('input');
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', (e) => {
   const fontSize = e.currentTarget.value;
   spanEl.style.fontSize = `${fontSize}px`;
})