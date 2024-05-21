var splide = new Splide("#main-slider", {
  width: 600,
  height: 300,
  pagination: false,
  cover: true,
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();

// Animate
var controller = new ScrollMagic.Controller();

var tl = gsap.timeline();

tl.from(".main-block", { opacity: 0, y: 100, duration: 1 });
tl.from(".container", { opacity: 0, y: 100, duration: 1 });
tl.from(".articles", { opacity: 0, y: 100, duration: 1 });
tl.from(".sortTobacco-list", { opacity: 0, y: 100, duration: 1 });
tl.from(".cards", { opacity: 0, y: 100, duration: 1 });
tl.from("#main-slider", { opacity: 0, y: 100, duration: 1 });
tl.from(".video-slider", { opacity: 0, y: 100, duration: 1 });

var scene = new ScrollMagic.Scene({
  triggerElement: ".main-block",
  triggerHook: 0.9,
  reverse: false,
})
  .setTween(tl)
  .addTo(controller);
