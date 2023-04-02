/*========= Idea [0]: toggle icon navbar =========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  // ---- [1] convert menu icon to cancle icon ----
  // [1.1]
  // bx-x refer to --> <i class='bx bx-x' ></i>
  menuIcon.classList.toggle("bx-x");
  // [1.2]
  navbar.classList.toggle("active");
};

/*========= Idea [1]: scroll sections active link =========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*========= Idea [2]: sticky navbar =========*/
  let header = document.querySelector("header", window.scrollY > 100);

  /*========= Idea [3]: remove toggle icon and navbar when click navbar link (scroll) =========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========= scroll reveal =========*/
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// reveal-1
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
// reveal-2
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
// reveal-3
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// reveal-4
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*========= typed js =========*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  typeDelay: 1000,
  loop: true,
});
