var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("myNavbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
};

document.getElementById("year").innerHTML = new Date().getFullYear();

// Modal Popup
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const backgroundBlur = document.createElement("div");
backgroundBlur.id = "backgroundBlur";

openBtn.addEventListener("click", () => {
  document.body.appendChild(backgroundBlur);
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  document.body.removeChild(backgroundBlur);
  modal.classList.remove("open");
  document.body.style.overflow = "";
});
