var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

/* swiper ver opciones */

var swiper = new Swiper(".SwiperOpciones", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

/* swiper busquedas recientes */
var swiper = new Swiper(".SwiperBusquedaReciente", {
  slidesPerView: "auto",
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});




