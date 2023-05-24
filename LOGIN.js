const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const loginpopup = document.querySelector('.login-button');
const closebtn = document.querySelector('.close-icon');

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

loginpopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

closebtn.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});