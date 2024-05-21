document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal();

  function revealOnScroll() {
    const elementsToReveal = document.querySelectorAll(
      ".layer, .info-block, .products, .accordion-item, .video-section, h2"
    );

    elementsToReveal.forEach((element) => {
      if (window.innerWidth < 1020) {
        element.classList.add("reveal");
      } else {
        if (isInViewport(element)) {
          element.classList.add("reveal");
        }
      }
    });
  }

  revealOnScroll();

  window.addEventListener("scroll", revealOnScroll);
});
