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

//  ========== Initialize Swiper ===========

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 7,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



