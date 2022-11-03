const navbar = document.querySelector('nav');
const nav_menu = document.querySelector('.nav__menu');
const nav_btn = document.querySelector('.open-menu-btn');
const nav_close_btn = document.querySelector('.close-menu-btn');


//changing nav-bar on scrolling
window.addEventListener('scroll', () => {
    navbar.classList.toggle('window-scroll', window.scrollY > 0)
})


//opening/hide nav-menu
nav_btn.addEventListener("click", (e) => {
    e.preventDefault();
    nav_menu.style.display = "flex";
    nav_btn.style.display = "none";
    nav_close_btn.style.display = "block";
});


nav_close_btn.addEventListener("click", (e) => {
    e.preventDefault();
    nav_menu.style.display = "none";
    nav_btn.style.display = "block";
    nav_close_btn.style.display = "none";
});


