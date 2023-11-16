const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menubar.classList.toggle("active");
});

document.querySelectorAll(".menulink").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menubar.classList.remove("active");
  });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
