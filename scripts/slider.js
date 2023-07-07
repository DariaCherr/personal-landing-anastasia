new Swiper('.slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    spaceBetween: 30,

    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        770: {
            slidesPerView: 2.1,
        },
    }

});

new Swiper('.slider-article', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    spaceBetween: 30,

    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        650: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        }
    }
});

new Swiper('.slider-reviews', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    spaceBetween: 30,

    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        650: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        }
    }
});