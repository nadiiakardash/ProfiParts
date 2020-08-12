function initNewsSwiper(slider) {
  if(!slider) {
    return;
  }

  let mySwiper = new Swiper(`.${slider.container}`, {
    pagination: {
      el: `.${slider.blockClass}__pagination`,
      type: `bullets`,
      currentClass: `${slider.blockClass}__current`,
      totalClass: `${slider.blockClass}__total`,
      bulletClass: `${slider.blockClass}__bullet`,
      bulletActiveClass: `${slider.blockClass}__bullet--active`,
      clickable: true,
    },
    navigation: {
      nextEl: `.${slider.blockClass}__button--next`,
      prevEl: `.${slider.blockClass}__button--prev`,
      disabledClass: `${slider.blockClass}__button--disabled`,
    },
    speed: 1000,
    loop: slider.loop,
    slidesPerView: slider.slidesPerView || 1,
    spaceBetween: slider.spaceBetween || 30,
    freeMode: slider.freeMode,
    watchSlidesVisibility: slider.watchSlidesVisibility,
    watchSlidesProgress: slider.watchSlidesProgress,
    wrapperClass: `${slider.blockClass}__list`,
    slideClass: `${slider.blockClass}__item`,
    slideActiveClass: `${slider.blockClass}__item--active`,
    slideDuplicateActiveClass: `${slider.blockClass}__item-duplicate--active`,
    slideVisibleClass: `${slider.blockClass}__item--visible`,
    slideDuplicateClass: `${slider.blockClass}__item-duplicate`,
    slideNextClass: `${slider.blockClass}__item--next`,
    slideDuplicateNextClass: `${slider.blockClass}__item-duplicate--next`,
    slidePrevClass: `${slider.blockClass}__item--prev`,
    slideDuplicatePrevClass: `${slider.blockClass}__item-duplicate--prev`,
    slideBlankClass: `${slider.blockClass}__invisible-blank`,
    bulletClass: `${slider.blockClass}__bullet`,
    bulletActiveClass: `${slider.blockClass}__bullet--active`,
    modifierClass: `${slider.blockClass}__pagination`,
    hiddenClass: `${slider.blockClass}__hidden`,
    progressbarFillClass: `${slider.blockClass}__progressbar-fill`,
    clickableClass: `${slider.blockClass}__clickable`,
    lockClass: `${slider.blockClass}__lock`,
    progressbarOppositeClass: `${slider.blockClass}__progressbar-opposite`,
    breakpoints: {
      320: {
        slidesPerView: slider.slidesPerViewMobile || 1
      },
      768: {
        spaceBetween: slider.spaceBetweenTablet || 15
      },
      1200: {
        spaceBetween: slider.spaceBetween || 30
      }
    }
  });
}


const news = {
  container: 'news__slider',
  blockClass: 'news',
  slidesPerView: 2
};

initNewsSwiper(news);
