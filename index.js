$(document).ready(function(){
    $('.slider-1').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
  })
  $('.slider-reviews').slick({
    dots: true,
    adaptiveHeight: true
  })
})
// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('our-team-show');
//     }
//   });
// }

// let options = {
//   threshold: [1] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.our-team__container');

// for (let elm of elements) {
//   observer.observe(elm);
// }

