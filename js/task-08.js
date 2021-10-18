const formEl = document.querySelector('.login-form')
const emailEl = document.querySelector('[type="email"]')
const passwordEl = document.querySelector('[type="password"]')


const user =  {
    email: "",
    password: "",
}

formEl.addEventListener('submit', formSubmit)

function formSubmit (event) {
    event.preventDefault()
    const { elements: { email, password} } = event.currentTarget;
    if(email.value === "" || password.value === ""){
        return alert('Alert! Write a login or password!')
    }

    user.email = email.value;
    user.password = password.value;
    console.log(user)
    formEl.reset()
}




