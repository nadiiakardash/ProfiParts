// Получаем нужный элемент
function visibleSection(target, link) {
  let sections = document.querySelectorAll(`.${target}`);
  let links = document.querySelectorAll(`.${link}`);

  sections.forEach((section, index) => {
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + section.getBoundingClientRect().top - 400,
        left: window.pageXOffset + section.getBoundingClientRect().left - 400,
        right: window.pageXOffset + section.getBoundingClientRect().right - 400,
        bottom: window.pageYOffset + section.getBoundingClientRect().bottom - 400
      },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right) {

      let id =  index - 1;

      if(id < 0) {
        id = 0;
      }

      if(!links[id].classList.contains(`${link}--active`)) {
        links[id].classList.add(`${link}--active`);
      }
    } else {
      let id =  index - 1;

      if(id < 0) {
        id = 0;
      }

      links[id].classList.remove(`${link}--active`);
    }
  })
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  visibleSection('main__item', 'anchors__link');
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
visibleSection('main__item', 'anchors__link');
