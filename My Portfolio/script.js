// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump behavior

    const targetId = this.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section

    if (targetSection) {
      // Scroll to the target section with smooth behavior
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Aligns the top of the section with the top of the viewport
      });
    }
  });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission (replace with actual backend logic)
  console.log('Form submitted:', { name, email, message });
  alert('Thank you for your message! I will get back to you soon.');

  // Reset the form
  this.reset();
});

// Highlight Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active class to the current link
      navLinks[index].classList.add('active');
    }
  });
});
