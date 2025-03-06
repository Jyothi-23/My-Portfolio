// Scroll-triggered animations with smooth fade-in
const sections = document.querySelectorAll('.section');

const checkVisibility = () => {
  sections.forEach((section) => {
    const { top, bottom } = section.getBoundingClientRect();
    if (top < window.innerHeight * 0.85 && bottom > 0) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};

document.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);

// Smooth scrolling with active class for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Form submission with fade-out effect
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = this;
  const message = document.createElement('p');
  message.textContent = 'Thank you for reaching out! I will get back to you soon.';
  message.classList.add('success-message');
  form.appendChild(message);
  
  setTimeout(() => {
    message.style.opacity = '0';
    setTimeout(() => message.remove(), 500);
    form.reset();
  }, 2000);
});