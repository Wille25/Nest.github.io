const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

const navButtons = document.querySelectorAll('.nav-buttons button');
const navbar = document.querySelector('nav');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navbar.style.display = 'none'; // Hide navbar
  });
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > lastScrollY) { // scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else { // scrolling up
        nav.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});