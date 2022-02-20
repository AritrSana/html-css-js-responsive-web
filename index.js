/** @format */

/** @format */

// navbar

let section = document.querySelectorAll("section");
let navA = document.querySelectorAll(".collapse ul li a");
let navbarBrand = document.querySelector(".navbar-brand");
let navbarToggler = document.querySelector(".navbar-toggler-icon");

window.addEventListener("scroll", () => {
  let current = "";
  section.forEach((section) => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navA.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
    if (current === "home" || current === "clients") {
      navbarBrand.classList.add("text-white");
      navbarToggler.classList.add("btn-close-white");
      if (!a.classList.contains("active")) {
        a.classList.add("text-white");
        navbarToggler.classList.add("btn-close-white");
      }
    } else {
      navbarBrand.classList.remove("text-white");
      a.classList.remove("text-white");
      navbarToggler.classList.remove("btn-close-white");
    }
  });
});

// navbar
