const burgur = document.querySelector(".burgur");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list li a");

const toggleNavbar = () => {
  navList.classList.toggle("expanded");
  navList.querySelector('ul').classList.toggle("expanded");
};

burgur.addEventListener("click", toggleNavbar);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("expanded");
    navList.querySelector('ul').classList.remove("expanded");
  });
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !burgur.contains(event.target)) {
    navList.classList.remove("expanded");
    navList.querySelector('ul').classList.remove("expanded");
  }
});
