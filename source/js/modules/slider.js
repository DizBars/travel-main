import '../vendor';

const hero = document.querySelector('.hero__swiper');
const tours = document.querySelector('.tours__swiper');
const education = document.querySelector('.education__swiper');
const reviews = document.querySelector('.reviews__swiper');
const advantages = document.querySelector('.advantages__swiper');
const gallery = document.querySelector('.gallery__swiper');

function heroSlider() {
  if (hero) {
    // eslint-disable-next-line
    new Swiper(hero, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerGroup: 1,
    });
  }
}

function toursSlider() {
  if (tours) {
    // eslint-disable-next-line
    new Swiper(tours, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 30,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.tours__button--next',
        prevEl: '.tours__button--prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 18,
          slidesPerView: '1',
        },
        768: {
          spaceBetween: 18,
          slidesPerView: '2',
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 'auto',
        },
      },
    });
  }
}

function educationSlider() {
  if (education) {
    // eslint-disable-next-line
    new Swiper(education, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.education__button--next',
        prevEl: '.education__button--prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 21,
          slidesPerView: '1',
          initialSlide: 2,
        },
        768: {
          slidesPerView: '3',
          spaceBetween: 21,
        },
        1200: {
          slidesPerView: '4',
          spaceBetween: 20,
        },
      },
    });
  }
}

function reviewsSlider() {
  if (reviews) {
    // eslint-disable-next-line
    new Swiper(reviews, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 120,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 15,
          slidesPerView: '1',
        },
        768: {
          spaceBetween: 30,
        },
        1200: {
          spaceBetween: 120,
        },
      },
    });
  }
}

function advantagesSlider() {
  if (advantages && window.innerWidth > 1200) {
    // eslint-disable-next-line
    new Swiper(advantages, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true,
      initialSlide: 2,
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },
    });
  }
}

function gallerySlider() {
  if (gallery) {
    // eslint-disable-next-line
    new Swiper(gallery, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 5,
      slidesPerGroup: 2,
      initialSlide: 7,
      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: '2',
          spaceBetween: 3,
        },
        768: {
          initialSlide: 5,
          slidesPerView: '3',
        },
        1200: {
          slidesPerView: 'auto',
        },
      },
    });
  }
}

const destroySwiper = () => {
  if (window.innerWidth <= 1200 && advantagesSlider) {
    advantagesSlider.destroy();
    document.querySelector('.advantages__swiper').style.display = 'block';
  } else {
    advantagesSlider();
  }
};

const handleResize = () => {
  destroySwiper();
};

window.addEventListener('resize', handleResize);


export {heroSlider, toursSlider, educationSlider, reviewsSlider, advantagesSlider, gallerySlider, handleResize};

