// =================== preloader js ================== //
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  if (!preloader) return;

  preloader.style.transition = "opacity .5s ease";
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1500);
});

// =================== light / dark ================== //
const moon = document.getElementById("btnSwitch");
const icon = moon ? moon.querySelector("img") : null;

if (moon && icon) {
  moon.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-bs-theme");
    document.documentElement.setAttribute(
      "data-bs-theme",
      theme === "dark" ? "light" : "dark"
    );

    icon.src =
      theme === "light"
        ? "/images/icon/sun.svg"
        : "/images/icon/moon.svg";

    moon.style.backgroundColor = theme === "light" ? "white" : "black";
    changeImage();
  });
}

function changeImage() {
  const theme = document.documentElement.getAttribute("data-bs-theme");
  const images = document.querySelectorAll("img.dark");

  images.forEach((img) => {
    if (theme === "dark") {
      if (!img.src.includes("-dark")) {
        const i = img.src.lastIndexOf(".");
        img.src = img.src.slice(0, i) + "-dark" + img.src.slice(i);
      }
    } else {
      img.src = img.src.replace("-dark.", ".");
    }
  });
}
changeImage();

// =================== header js =================== //

// submenu marker
document.querySelectorAll("ul>li>.submenu").forEach((submenu) => {
  submenu.parentElement?.classList.add("menu-item-has-children");
});

// mobile submenu toggle
document.querySelectorAll(".menu li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth >= 1200) return;

    const parent = link.parentElement;
    const submenu = parent.querySelector("ul");
    if (!submenu) return;

    e.preventDefault();
    parent.classList.toggle("open");
    submenu.style.display = parent.classList.contains("open")
      ? "block"
      : "none";
  });
});

// header bar toggle
const headerBar = document.querySelector(".header-bar");
const menu = document.querySelector(".menu");

if (headerBar && menu) {
  headerBar.addEventListener("click", () => {
    headerBar.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

// fixed header on scroll
const fixedTop = document.querySelector("header");
if (fixedTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      fixedTop.classList.add("header-fixed", "fadeInUp");
    } else {
      fixedTop.classList.remove("header-fixed", "fadeInUp");
    }
  });
}

// =================== AOS =================== //
if (window.AOS) AOS.init();
