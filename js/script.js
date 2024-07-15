// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika about di klik

document.querySelector("#about").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar side bar untuk menghilangkan nav

const about = document.querySelector("about");

document.addEventListener("click", function (e) {
  if (!about.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
