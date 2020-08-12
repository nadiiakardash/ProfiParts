if (document.documentElement.clientWidth < 768) {
  AOS.init({
    duration: 2000,
    offset: 0
  })
} else {
  AOS.init({
    duration: 2000,
    offset: 100
  })
}
