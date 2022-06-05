// Navbar

const navToggle = document.querySelector("#nav-toggle");
const links = document.querySelector("#links");
if (navToggle != null) {
  navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
  });
}

// add fixed class to navbar
const navbar = document.querySelector("#nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});