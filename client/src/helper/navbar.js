const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // burger
  const burgerClick = burger.addEventListener("click", () => {
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
    if (prevScrollpos > currentScrollPos || currentScrollPos < 8) {
      document.getElementById("navbar").style.top = "0";
    }else {
      document.getElementById("navbar").style.top = "-64px";
    }
    prevScrollpos = currentScrollPos;
  })
};

const navScroll = () => {
  let mainNavLinks = document.querySelectorAll(".navbar ul li a");
  let mainSections = document.querySelectorAll("main section");

  let lastId;
  let cur = [];

  // scroll
  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // click
  mainNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

// const typeEffect = () => {
//   var content = "if life give you lemons, now i don't remember the rest of this saying. something something";
//   // var content = 'If life is so blue, then select another colour from the rainbow';
//   var p = document.getElementById('first');
//   p.style.backgroundColor = "green";
//   var ele = content.split('');
//   var r = '';
//   function type() {
//     if (content.length >= r.length) {
//       r += content[r.length];
//       p.innerHTML = r;
//       setTimeout(type, 20);
//     }
//   }
//   type();
// }
// typeEffect();
navSlide();
navScroll();