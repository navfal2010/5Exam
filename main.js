let userName = document.querySelector('.form__first_inp')
let userEmail = document.querySelector('.form__second_inp')
let loginBtn = document.querySelector('.form__btn')
let errorText = document.querySelector('.p-error')

loginBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            let found = false;
            data.forEach(v => {
                if (v.username === userName.value && v.email === userEmail.value) {
                    found = true;
                    window.location.href = 'https://navfal2010.github.io/Flags/'
                    userName.value = null
                    userEmail.value = null
                }
            });
            if (!found) {
                errorText.innerHTML = 'Login xato'
                errorText.style.color = 'red'
                userName.value = null
                userEmail.value = null
            }
        })
        .catch(error => {
            console.error('Error:', error)
            errorText.innerHTML = 'An error occurred. Please try again later.'
            errorText.style.color = 'red'
        })
})

