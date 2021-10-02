const APIURL = 'https://api.github.com/users/'
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
const button = document.querySelector('button');
const form = document.getElementById('form')
const errorMessage = document.querySelector('.error-search');

const userName = document.getElementById('user-name');
const userLink = document.getElementById('link');
const date = document.getElementById('date');
const lorem = document.getElementById('lorem');
const userImg = document.getElementById('user-img');

const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');

const city = document.getElementById('city');
const locationClass = document.querySelector('.location');
const twitter = document.getElementById('twitter');
const twitterClass = document.querySelector('.twitter');
const website = document.getElementById('website');
const websiteClass = document.querySelector('.website');
const company = document.getElementById('company');
const companyClass = document.querySelector('.company');

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


async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        renderData(data)
    } catch(err) {
        if(err.response.status == 404) {
            errorMessage.classList.add('active');
        }

    }
}

function renderData(data) {
    userName.textContent = data.login;
    userLink.textContent = `@${data.login}`;
    date.textContent = `Joined ${data.created_at.slice(0,10)}`;
    lorem.textContent = data.bio ? data.bio : `This profile has no bio`;
    userImg.setAttribute('src', data.avatar_url)

    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;

    city.textContent = data.location ? data.location : `Not Available`;
    if(city.textContent == `Not Available`) {
        locationClass.style.opacity="0.3";
    }
    twitter.textContent = data.twitter_username ? data.twitter_username : `Not Available`;
    if(twitter.textContent == `Not Available`) {
        twitterClass.style.opacity="0.3";
    }
    website.textContent = data.html_url.slice(8, data.html_url.length);
    if(website.textContent == `Not Available`) {
        websiteClass.style.opacity="0.3";
    }
    company.textContent = data.company ? data.company : `Not Available`;
    if(company.textContent == `Not Available`) {
        companyClass.style.opacity="0.3";
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    errorMessage.classList.remove('active');

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})