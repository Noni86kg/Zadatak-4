const toggle = document.querySelector('.toggle');
const darkLight = document.querySelector('.dark-light');
const moonIcon = document.querySelector('.moon-light-bg');
const body = document.querySelector('body');
const userForm = document.querySelector('.user-form');
const search = document.getElementById('search');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const main = document.querySelector('main');
const number = document.querySelector('.number');
const icons = document.querySelector('.icons');

// dark , light mode
toggle.addEventListener('click', function(e) {

    if (darkLight.textContent == "DARK") {
    darkLight.innerHTML = 'LIGHT';
    } else {
        darkLight.innerHTML = 'DARK';
    }
    toggle.classList.toggle('active');
    moonIcon.classList.toggle('active');
    body.classList.toggle('active');
    userForm.classList.toggle('active');
    search.classList.toggle('active');
    h1.classList.toggle('active');
    h2.classList.toggle('active');
    main.classList.toggle('active');
    number.classList.toggle('active');
    icons.classList.toggle('active');
    search.classList.toggle("placeholder-red");
})