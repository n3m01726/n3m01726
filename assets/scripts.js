const toggle = document.querySelector('.theme-toggle');
const body = document.body;

// Dark mode auto selon préférence utilisateur
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// Fade-in au scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
faders.forEach(el => observer.observe(el));
