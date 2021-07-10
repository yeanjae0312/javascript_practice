const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add('hidden');

    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY, username);

    paingGreetings(username);
}

function paingGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit',onLoginSubmit);

} else {
    // show the greeting
   paingGreetings(savedUsername);
}