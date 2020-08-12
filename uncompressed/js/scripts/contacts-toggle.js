function contactsToggle() {
  let toggleButton = document.querySelectorAll('.contacts__button-toggle');
  let sliderButtonPrev = document.querySelector('.contacts__button--prev');
  let sliderButtonNext = document.querySelector('.contacts__button--next');
  let addressList =  document.querySelectorAll('.contacts__address');
  let sliderList =  document.querySelectorAll('.contacts__item--main');
  let thumbsItem = document.querySelectorAll('.contacts__item--thumbs');

  toggleButton.forEach(button => {

    button.onclick = event => {
      let parentRow = event.target.closest('.contacts__address');

      if(!parentRow) return;

      if(parentRow.classList.contains('contacts__address--active')) {
        parentRow.classList.remove('contacts__address--active');
      } else {
        parentRow.classList.add('contacts__address--active');
      }
    };
  })

  function sliderToggle(prev, thumb) {
    sliderList.forEach((slider, index) => {
      if(sliderList[index].classList.contains('contacts__item--active')) {
        addressList.forEach(address => {
          address.classList.remove('contacts__address--active');
        });

        if(!prev && !thumb) {
          addressList[index + 1].classList.add('contacts__address--active');
        } else if(prev && !thumb) {
          try {
            addressList[index - 1].classList.add('contacts__address--active');
          } catch {
            return;
          }
        } else {
          addressList[index].classList.add('contacts__address--active');
        }
      }
    })
  }

  sliderButtonNext.onclick = () => sliderToggle();
  sliderButtonPrev.onclick = () => sliderToggle(true);

  thumbsItem.forEach(button => {
    button.onclick = () => sliderToggle(false, true);
  })
}

contactsToggle();
