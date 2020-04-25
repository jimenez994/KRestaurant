export const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  alert("hi")
  // burger
  burgerClick = burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // animation links
    navLinks.forEach((link, index) => {

      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }

    });
    // burger animation
    burger.classList.toggle("toggle");
  });

  // burger when scroll 
  var prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    var currentScrollPos = window.pageYOffset;
    this.document.querySelector('.nav-links').classList.remove('nav-active');

    // navbar toi default settings
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
    navLinks.forEach((link) => {
      if (link.style.animation) {
        link.style.animation = "";
      }
    })

    // hide navbar when scroll
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-8vh";
    }
    prevScrollpos = currentScrollPos;
  })
};