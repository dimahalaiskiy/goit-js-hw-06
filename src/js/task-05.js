const inputEl = document.querySelector('#name-input');
const inputTextEl = document.querySelector('#name-output')

inputEl.addEventListener('input', (e) => {
    if(inputEl.value == false) {
        inputTextEl.textContent = 'Anonymous'
    } else
    inputTextEl.textContent = e.currentTarget.value;
})

// В значение поставил false так как пустая строка это false, а произвольное ко-во пробелов это же тоже пустая строка, верно? 
// Или корректней все-таки вместо false подставить ""?
