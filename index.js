const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
//Toggle Nav
burger.addEventListener('click', () => {
  nav.classlist.toggle('nav-active');
});

navLinks.forEach((link, index) => {
link.style.animation='navLinksFade 0.5s ease forwards ${index/7}s';
console.log(index/7);
});




}

navSlide();