// Setting up the Variables
const bars = document.getElementById("nav-action");
const nav = document.getElementById("nav");

//setting up the listener
bars.addEventListener("click", barClicked, false);

//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle("active");
  nav.classList.toggle("visible");
}

function toggleVisibility() {
  if (window.innerWidth < 768) {
    nav.classList.remove("visible");
  }
}

toggleVisibility();

window.addEventListener("resize", toggleVisibility);

