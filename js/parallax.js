$(function () {
  $('a[href*="#"]').on("click", function (e) {
    if (this.hash !== "" && this.hash !== "#") {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear"
      );
    }
  });
});

// Smooth scroll

// $(function () {
//   var el = $(".intro"),
//     mac = $("#mac"),
//     offset = mac.offset(),
//     windowHeight = $(window).height();

//   $(window).on("scroll", function () {
//     $("h1").fadeOut(500);

//     var windowTop = $(window).scrollTop(),
//       scrollPercent = (offset.top - windowTop) / offset.top,
//       scale = "scale(" + scrollPercent + ")";

//     el.css("transform", scale);

//     if (windowTop >= 940) {
//       el.hide();
//     } else {
//       el.show();
//     }
//   });
// });
