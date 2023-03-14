// Scroll Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  navbar.classList.toggle("active", positionWindow);
});

// Hamburger
const Hamburger = document.querySelector(".hamburger");

Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("is-active");
});

// Click Hamburger
const menuNavbar = document.querySelector(".col-navbar");

Hamburger.addEventListener("click", () => {
  menuNavbar.classList.toggle("active");
});
