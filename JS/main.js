// Navbar

const navToggle = document.querySelector("#nav-toggle");
const links = document.querySelector("#links");
if (navToggle != null) {
  navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
  });
}