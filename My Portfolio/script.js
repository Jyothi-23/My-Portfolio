// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Smooth Scrolling for Scroll Down Arrow
document.querySelector('.scroll-down-arrow').addEventListener('click', function (e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission (replace with actual submission logic)
  console.log('Form submitted:', { name, email, message });
  alert('Thank you for your message! I will get back to you soon.');

  // Clear form fields
  document.getElementById('contact-form').reset();
});

// Animate Skills on Scroll
const skillsSection = document.getElementById('skills');
const skills = document.querySelectorAll('.skill');

const animateSkills = () => {
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const skillBottom = skill.getBoundingClientRect().bottom;

    if (skillTop < window.innerHeight && skillBottom > 0) {
      skill.style.opacity = '1';
      skill.style.transform = 'translateY(0)';
    } else {
      skill.style.opacity = '0';
      skill.style.transform = 'translateY(20px)';
    }
  });
};

window.addEventListener('scroll', animateSkills);

// Initialize Particles.js for Front Page Background
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles.js loaded!');
});

// Add hover effect to project cards
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'translateY(-10px)';
    project.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  });

  project.addEventListener('mouseleave', () => {
    project.style.transform = 'translateY(0)';
    project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });
});
