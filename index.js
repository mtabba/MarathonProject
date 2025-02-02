// Checkbox for theme
const slider = document.getElementById('slider');
const themeStyle = document.getElementById('theme-style');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeStyle.href = 'stylesdark.css';
  slider.checked = true;
}

//  event listener for the checkbox
slider.addEventListener('change', function () {
  if (this.checked) {
    themeStyle.href = 'stylesdark.css';
    localStorage.setItem('theme', 'dark');
  } else {
    themeStyle.href = 'styleslight.css';
    localStorage.setItem('theme', 'light');
  }
});

// GSAP Animations for Projects Cards
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.projectsname', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects-detail',
      start: 'top 80%',
      end: 'bottom 50%',
      toggleActions: 'play none none none',
    },
  });
});

// GSAP Animation for Hero Section
gsap.from('#hero-title', {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: 'power3.out',
  delay: 0.5,
});

gsap.from('#hero-subtitle', {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: 'power3.out',
  delay: 1,
});

gsap.from('#hero-button', {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: 'power3.out',
  delay: 1.5,
});

// Optional: Background Animation
gsap.to('.intro-container', {
  duration: 5,
  backgroundPosition: '50% 100%',
  ease: 'none',
  repeat: -1,
  yoyo: true,
});
