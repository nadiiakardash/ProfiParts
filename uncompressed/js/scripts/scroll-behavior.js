const anchors = document.querySelectorAll('.scroll');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let scrolltop = pageYOffset;
const toggleClass = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (pageYOffset > scrolltop) {
    toggleClass.classList.add("header--fixed");
  } else {
    toggleClass.classList.remove("header--fixed");
  }
  scrolltop = pageYOffset;
});
