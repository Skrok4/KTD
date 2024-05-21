// MAIN SLIDER
// document.addEventListener("DOMContentLoaded", function () {
//   const innerHeight = window.innerHeight;

//   const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

//   gsap.registerPlugin(ScrollTrigger);
//   gsap.utils.toArray(".parallax-section").forEach((section, i) => {
//     const bg = section.querySelector(".bg");

//     gsap.fromTo(
//       bg,
//       {
//         backgroundPosition: () =>
//           i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
//       },
//       {
//         backgroundPosition: () =>
//           `50% ${innerHeight * (1 - getRatio(section))}px`,
//         ease: "none",
//         scrollTrigger: {
//           trigger: section,
//           start: () => (i ? "top bottom" : "top top"),
//           end: "bottom top",
//           scrub: true,
//         },
//       }
//     );
//   });
// });

// CAROUSEL

const carouselViewport = document.querySelector(".carousel__viewport");

function nextSlide() {
  carouselViewport.scrollBy({
    left: carouselViewport.clientWidth,
    behavior: "smooth",
  });
}

function prevSlide() {
  carouselViewport.scrollBy({
    left: -carouselViewport.clientWidth,
    behavior: "smooth",
  });
}
