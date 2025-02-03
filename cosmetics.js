let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');


searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('active');
});

let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');


loginBtn.addEventListener('click', () => {
  loginForm.classList.toggle('active');
});

