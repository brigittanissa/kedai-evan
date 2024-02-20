//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketka hamburg menu di klik
document.querySelector("#hamburgmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan hanburg-menu
const hamburg = document.querySelector("#hamburgmenu");
document.addEventListener("click", function (e) {
  if (!hamburg.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
