const inputEl = document.querySelector('#validation-input');
const currentNumOfSymbol = inputEl.getAttribute('data-length')

inputEl.addEventListener('blur', ((e) => {
   if(e.currentTarget.value.length != currentNumOfSymbol) {
    inputEl.classList.add('invalid') 
    } else
    inputEl.classList.replace('invalid', 'valid')
}))