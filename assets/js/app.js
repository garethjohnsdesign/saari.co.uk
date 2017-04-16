$(document).foundation();

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

// Carousel
$('.carousel').flickity({
  // options
  contain: true,
  setGallerySize: false,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: false,
  pageDots: false,
  arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});