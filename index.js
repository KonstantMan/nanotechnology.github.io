const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    navLinks.classList.toggle(".nav-active");
  });
}
navSlide();

