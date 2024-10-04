let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Scroll down and passed 100px, hide the header
    header.classList.add('hidden');
  } else {
    // Scroll up or less than 100px, show the header
    header.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});
