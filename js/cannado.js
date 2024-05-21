$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    video: true,
    lazyLoad: true,
  });
});

(function ($) {
  "use strict";

  // instagram slider
  var swiper = new Swiper(".instagram-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
      330: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },

      4500: {
        slidesPerView: 6,
      },
    },
  });

  // category-slider
  var swiper = new Swiper(".category-slider", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 15,
      },
    },
  });
  // popular-item-slider
  var swiper = new Swiper(".popular-item-slider", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 8,
        spaceBetween: 15,
      },
      1800: {
        slidesPerView: 10,
        spaceBetween: 15,
      },
    },
  });
  // popular-item-slider
  var swiper = new Swiper(".near-offer-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  // featured-partners-slider
  var swiper = new Swiper(".featured-partners-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  // trending-slider
  var swiper = new Swiper(".trending-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  // fresh deals
  var swiper = new Swiper(".fresh-deals-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  // kosher-delivery-slider
  var swiper = new Swiper(".kosher-delivery-slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  // food near me
  var swiper = new Swiper(".food-near-me", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 8,
        spaceBetween: 15,
      },
    },
  });
  // Testimonials
  var swiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  // advertisement slider
  var swiper = new Swiper(".advertisement-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".featured-products-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // shop-detail-slider slider

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  // about-us-slider slider
  var swiper = new Swiper(".about-us-slider", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // about-us-slider slider
  var swiper = new Swiper(".feedback-slider", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // smooth scroll
  $.fn.smoothScroll = function (setting) {
    var _default = {
        duration: 1000,
        easing: "swing",
        offset: 0,
        top: "100px",
      },
      _setting = $.extend(_default, setting),
      _handler = function () {
        var dest = 0,
          target = this.hash,
          $target = $(target);
        $(this).on("click", function (e) {
          e.preventDefault();
          if (
            $target.offset().top >
            $(document).height() - $(window).height()
          ) {
            dest = $(document).height() - $(window).height();
          } else {
            dest = $target.offset().top - _setting.offset;
          }
          $("html, body").animate(
            {
              scrollTop: dest,
            },
            _setting.duration,
            _setting.easing
          );
        });
      };
    return this.each(_handler);
  };
  $(".scrollnav .nav-pills .nav-link").smoothScroll({
    duration: 1000, // animation speed
    easing: "swing", // find more easing options on http://api.jqueryui.com/easings/
    offset: 0, // custom offset
  });

  // full view page
  $(function () {
    $(".fullpageview").on("click", function () {
      $(".md-modal").addClass("md-show");
    });
    $(".md-close").on("click", function () {
      $(".md-modal").removeClass("md-show");
    });
  });
  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".md-modal").removeClass("md-show");
    }
  });
})(jQuery);
