const sliders = document.querySelectorAll('.swiper')

sliders.forEach((slider) => {
  let mySwiper

  function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        slideClass: 'swiper-slide',
        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true
        }
      })

      slider.dataset.mobile = 'true'
    }

    if (window.innerWidth > 767) {
      slider.dataset.mobile = 'false'
      if (slider.classList.contains('swiper-container-initialized')) {
        mySwiper.destroy()
      }
    }
  }

  mobileSlider()

  window.addEventListener('resize', () => {
    mobileSlider()
  })
})
