
const playlist = document.querySelector('.playlist');
const right = document.querySelector('.main__right');


// open-close playlist Queue
playlist.onclick = function () {
    if (right.style.display === "block"){
        right.style.display = "none";
    }else{
        right.style.display = "block";
    }
}



//  ========== Initialize Swiper ===========

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Resposive meadia
    breakpoints: {
        1080: {
            slidesPerView: 2,
        },
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Resposive meadia
    breakpoints: {
        1080: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
        },
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Resposive meadia
    breakpoints: {
        1080: {
            slidesPerView: 7,
        },
        600: {
            slidesPerView: 5,
        },
    },
});

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Resposive meadia
    breakpoints: {
        1080: {
            slidesPerView: 9,
        },
        600: {
            slidesPerView: 7,
        },
    },
});

var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Resposive meadia
    breakpoints: {
        1080: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
    },
});



