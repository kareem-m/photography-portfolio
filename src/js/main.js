// navbar links
let menu = document.querySelector("i.menu"),
  close = document.querySelector("i.close"),
  menuPhone = document.querySelector(".phone");

menu.onclick = () => {
  menuPhone.classList.add("show");
  document.body.style.overflow = "hidden";
};

close.onclick = () => {
  menuPhone.classList.remove("show");
  document.body.style.overflow = "auto";
};

// active links on nav
const activePage = window.location.pathname;
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  if (activePage == "/") {
    if (link.href.includes(`index`)) {
      link.classList.add("active");
    }
  } else if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

// Sticky navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll toggle
let scrollToggle = document.createElement("div");
scrollToggle.className = "toggle scrollToggle";
document.body.appendChild(scrollToggle);

window.addEventListener("scroll", function () {
  if (this.scrollY >= 200) {
    scrollToggle.classList.add("show");
  } else {
    scrollToggle.classList.remove("show");
  }
});

scrollToggle.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

// All writes dynamic
const span = document.querySelector("footer .container .copy-right p span");
span.innerHTML = new Date().getFullYear();

// Loading
let loading = document.querySelector(".loading");
window.addEventListener("load", function () {
  loading.parentElement.style.overflow = "auto";
  loading.style.display = "none";
});
