const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

$(document).ready(function () {
  const el = $(".intro");
  const mac = $("#mac");
  let offset = mac.offset();
  const windowHeight = $(window).height();

  $("#scrollToTopBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $(window).on("scroll", function () {
    const windowTop = $(window).scrollTop();
    let scrollPercent = 0;
    let scale = "scale(0)";

    if (offset && offset.top !== undefined && offset.top !== null) {
      scrollPercent = (offset.top - windowTop) / offset.top;
      scale = "scale(" + scrollPercent + ")";
    }

    el.css("transform", scale);

    if (windowTop >= 940) {
      el.hide();
    } else {
      el.show();
    }

    $("#scrollToTopBtn").css("visibility", windowTop > 20 ? "visible" : "hidden");
  });
});

function scrollToTop() {
  document.body.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}