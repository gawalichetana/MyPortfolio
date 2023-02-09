
 /* Active link */
const navlink = document.querySelectorAll('.nav_link');
function activeLink(){
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}
navlink.forEach((a) => a.addEventListener('click',activeLink));



/* ========================= mixitup filter ============================*/
/* here i used mixitup js library for the animation of the content  */
var mixerProjects = mixitup('.project_container', {
    selectors: {
        target: '.project_item'
    },
    animation: {
        duration: 300
    }
});




/*===================== testimonials slider from swiper.js =========================== */

var testiSwiper = new Swiper(".testimonial_container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });




