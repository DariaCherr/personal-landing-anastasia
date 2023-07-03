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
            slidesPerView: 2,
        },
    }

});