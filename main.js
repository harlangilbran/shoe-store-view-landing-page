// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//when the shoe menu is clicked
document.querySelector("#shoe-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Click outside the sidebar to remove the nav
const hamburger = document.querySelector("#shoe-menu");

document.addEventListener("click", function (e) {
  if (!shoe.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
