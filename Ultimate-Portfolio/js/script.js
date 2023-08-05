const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.onclick = function() {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
}
