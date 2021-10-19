const inputEl = document.querySelector('#validation-input');
const currentNumOfSymbol = inputEl.getAttribute('data-length')


inputEl.addEventListener('blur', ((e) => {
    if(e.currentTarget.value.length == currentNumOfSymbol) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}))