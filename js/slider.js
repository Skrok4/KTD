const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 24, // Adjust the space between slides as needed
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });