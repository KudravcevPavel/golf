const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const userForms = document.getElementById('user_options-forms');



signupButton.addEventListener('click', () => {
   userForms.classList.remove('login-click')
   userForms.classList.add('signup-click')
}, false);



loginButton.addEventListener('click', () => {
   userForms.classList.remove('signup-click')
   userForms.classList.add('login-click')
}, false);